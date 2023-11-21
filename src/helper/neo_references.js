const TFI = {
    1: {
        ELBW: 80,
        VLBW: 70,
        LBW: 60
    },2: {
        ELBW: 100,
        VLBW: 90,
        LBW: 90
    },3: {
        ELBW: 120,
        VLBW: 110,
        LBW: 120
    },4: {
        ELBW: 140,
        VLBW: 130,
        LBW: 140
    },5: {
        ELBW: 150,
        VLBW: 150,
        LBW: 150
    },6: {
        ELBW: 150,
        VLBW: 150,
        LBW: 150
    },7: {
        ELBW: 150,
        VLBW: 150,
        LBW: 150
    },8: {
        ELBW: 150,
        VLBW: 150,
        LBW: 150
    },9: {
        ELBW: 150,
        VLBW: 150,
        LBW: 150
    },10: {
        ELBW: 175,
        VLBW: 175,
        LBW: 175
    }
}

 const drugs = {
    ampicillin: {
        dose: [25,50],
        freq: "tds",
        weight_based: true,
        unit: "mg",
        route: "iv"
    },ampicillin_meningitis: {
        dose: 100,
        freq: "bd",
        weight_based: true,
        unit: "mg",
        route: "iv"
    },gentamycin_term: {
        dose: 5,
        freq: "od",
        weight_based: true,
        unit: "mg",
        route: "iv"

    },gentamycin: {
        dose: 3,
        freq: "od",
        weight_based: true,
        unit: "mg",
        route: "iv"
    },cefotaxime: {
        dose: 50,
        freq: "tds",
        weight_based: true,
        unit: "mg"
    },cloxacillin: {
        dose: [12.5,25],
        freq: "qid",
        weight_based: false,
        unit: "mg"
    },phenorbabitone_loading: {
        dose: [15,20],
        freq: "stat",
        weight_based: true,
        unit: "mg"
    },phenorbabitone_maintenance: {
        dose: 5,
        freq: "OD or BD",
        weight_based: true,
        unit: "mg"
    },Dextrose_10: {
        dose: [2,4],
        freq: "stat",
        weight_based: true,
        unit: "ml",
        route: "iv"
    }, aminophylline_loading: {
        dose: [7,8],
        freq: "stat",
        weight_based: true,
        unit: "mg",
        route: "iv"
    },aminophylline_maintenance: {
        dose: 2,
        freq: "tds",
        weight_based: true,
        unit: "mg",
        route: "iv"
    },Mvt:{
        dose: [0.3,0.6],
        freq: "od",
        weight_based: true,
        unit: "ml"
    },Ferrimed: {
        dose: [3,6],
        freq: "od",
        weight_based: true,
        unit: "mg"
    }
 }


export const drugCalculation = (weight, name)=>{
    const drug = drugs[name];
    if(!drug) return null;

    let dose = null;


    if(drug.dose[0]){
        let dose1 = drug.dose[0] * (weight / 1000);
        let dose2 = drug.dose[1] * (weight / 1000);

        dose = `(${dose1.toFixed(1)} - ${dose2.toFixed(1)})`;
    }else{
        dose = `${(drug.dose * (weight / 1000)).toFixed(1)}`;
    }

    if(drug.dose[0])
    {
        return `${name} <b>${dose}${drug.unit}</b> ${drug.freq} ${drug.route} [(${drug.dose[0]} - ${drug.dose[1]})${drug.unit}\\kg ${drug.freq}]`.replace("_maintenance", "").replace("_loading", "");
    }
    return `${name} <b>${dose}${drug.unit}</b> ${drug.freq} ${drug.route} [${drug.dose}${drug.unit}\\kg ${drug.freq}]`.replace("_maintenance", "").replace("_loading", "");
}


export const catagorizeWeight = (weight)=> {
    if(weight < 1000){
        return "ELBW";
    }else if(weight >= 1000 && weight <= 1500){
        return "VLBW";
    }

    return "LBW";
}

export const getTotalTFI = (age, weight)=> {
    if(age <= 10){
        return TFI[age][catagorizeWeight(weight)];
    }

    return TFI[10][catagorizeWeight(weight)];
}

export const getTFI = (age, weight)=>{
    return (getTotalTFI(age, weight) * (weight / 1000)).toFixed(1);
}

export const getIVFpH = (tfi)=> {
    return (tfi / 24).toFixed(2); 
}

export const getFeeds = (tfi)=> {
    return tfi / 8;
}

