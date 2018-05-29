let customReportObject = {

//AGE
    victim_age_zero_to_twelve: ` "victim_age" BETWEEN 0 AND 12 `,
    victim_age_zero_to_eighteen: ` "victim_age" BETWEEN 0 AND 18 `,
    victim_age_thirteen_to_seventeen: ` "victim_age" BETWEEN 13 AND 17 `,
    victim_age_eighteen_to_twentyfour: ` "victim_age" BETWEEN 18 AND 24 `,
    victim_age_nineteen_to_fifty: ` "victim_age" BETWEEN 19 AND 50 `,
    victim_age_twentyfive_to_fiftynine: ` "victim_age" BETWEEN 25 AND 59 `,
    victim_age_oler_than_fifty: ` "victim_age" > 50 `,
    victim_age_sixty_and_older: ` "victim_age" >= 60 `,
    victim_age_unknown: ` "victim_age" IS NULL `,

//CONTACT TYPE - phone in-person
    phone_contact: ` "contact_type" = 'phone'  `,
    in_person_contact: ` "contact_type" = 'in-person' `,

//DISABILITIES
    disability_blind: ` "disability_blind" = TRUE `,
    disability_physical: ` "disability_physical" = TRUE `,
    disability_mental: ` "disability_mental" = TRUE `,
    disability_deaf: ` "disability_deaf" = TRUE `,
    disability_developmental: ` "disability_developmental" = TRUE `,
    disability_unknown: ` "disability_unknown" = TRUE  `,
    disability_other: ` "disability_other" = TRUE  `,
    disability_none: ` ("disability_none" = TRUE OR "disability_none" IS NULL)  `,

//GENDER

    victim_gender_male: `  "victim_gender" = 'Male'  `,
    victim_gender_female: `  "victim_gender" = 'Female'  `,
    victim_gender_non_binary: `  "victim_gender" = 'Non-binary'  `,
    victim_gender_unknown: ` ("victim_gender" IS NULL OR  "victim_gender" = ‘other')  `,
    total_gender_count: ` "contact_date"  BETWEEN $1 AND $2)`,


//IMMIGRANT COUNTRY
    immigrant_africa: `"victim_immigrant"='Africa'  `, 
    immigrant_asia: `"victim_immigrant"='Asia'  `, 
    immigrant_europe: `"victim_immigrant"='Europe'  `, 
    immigrant_mex_cen_so_america: `"victim_immigrant"='Mex/Cen/So America'  `,
    immigrant_middle_east: `"victim_immigrant"='Middle East'  `,
    immigrant_no: `"victim_immigrant"='No'  `,
    immigrant_unknown: `("victim_immigrant"='Unknown' OR "victim_immigrant IS NULL)  `,
    immigrant_other: `"victim_immigrant"='Other'  `,

//INDIVIDUALS SERVICED - TOTAL AND NEW
    total_victims: `  "contact_date" BETWEEN $1 AND  $2 `,
    new_victim: `  "victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR ("victim_prior_contact" = TRUE AND "victim_contact_prior_oct" = TRUE) `,

//IN-PERSON CRISIS COUNSELING
    crisis_counseling_individual: `  "crisis_counseling_individual" = TRUE `,
    crisis_counseling_group: ` "crisis_counseling_group" = TRUE  `,

//IN-PERSON LEGAL ADVOCACY: CIVIL
    ofp_hro: ` "legal_ofp_hro" = 'TRUE'  `,
    legal_immigration: ` "legal_immigration" = TRUE `,
    legal_intervention: ` "legal_intervention" = TRUE   `,

//IN-PERSON LEGAL ADVOCACY: CRIMINAL
    law_enforcement_interview: `  "legal_law_enforcement_interview" = TRUE  `,
    legal_prosecution_related: ` "legal_prosecution_related" = TRUE   `,
    legal_court_advocacy: ` "legal_court_advocacy" = TRUE  `,

//IN-PERSON MEDICAL ADVOCACY
    emergency_med_care_medical: `      "medical_accompaniment_medical" = TRUE `,
    emergency_med_care_dental: `      "medical_accompaniment_dental" = TRUE  `,
    forensic_exam: ` "medical_exam_support" = TRUE AND       `,

//OTHER IN-PERSON ADVOCACY
    information_referral_person: `"information_referral" = TRUE AND "contact_type" = 'in-person' `,
    safe_at_home: `"safe_at_home" = TRUE AND "contact_type" = 'in-person' `,
    emergency_financial: `"emergency_financial" = TRUE AND "contact_type" = 'in-person'  `,
    reparations_claims: `"reparations_claims" = TRUE AND "contact_type" = 'in-person'  `,

//PHONE SERVICES PROVIDED
    crisis_counseling: `"crisis_counseling" = TRUE AND "contact_type" = 'phone'  `,
    information_referral_person: `"information_referral" = TRUE AND "contact_type" = 'phone'  `,
    information_criminal_justice: `"information_criminal_justice" = TRUE AND "contact_type" = 'phone'  `,
    other_emergency_justice: `"other_emergency_justice" = TRUE AND "contact_type" = 'phone'  `,
    emergency_financial: `"emergency_financial" = TRUE AND "contact_type" = 'phone'  `,
    reparations_claims: `"reparations_claims" = TRUE AND "contact_type" = 'phone'  `,

//POLICE REPORT FILED
    police_report_filed_yes: `"police_report_filed" = 'True' `,
    police_report_filed_no: `"police_report_filed" = 'False' `,
    police_report_filed_unknown: `"police_report_filed" = 'Unknown' `,

 //RACE/ETHNICITY
    victim_ethnicity_asian: `  "victim_ethnicity" = 'Asian' `,
    NativeAmerican: `  "victim_ethnicity" = 'Native American' `,
    ChicanoLatino: `  "victim_ethnicity" = 'Chican@/Latin@'  `,
    AfricanAmericanBlack: `  "victim_ethnicity" = 'African American/Black' `,
    NativeHawaiianPacificIslander: `  "victim_ethnicity" =  'Native Hawaiian/Pacific Islander'  `,
    WhiteNonLatinoCaucasian: ` "victim_ethnicity" =  'White non-Latino/Caucasian' `,
    victim_ethnicity_other: ` "victim_ethnicity" = 'Other' AND "contact_date"  BETWEEN $1 AND $2) `,
    MultiRacial: `  "victim_ethnicity" = 'Multi-racial'   `,
    unknown: ` "victim_ethnicity" = 'unknown' OR  "victim_ethnicity" IS NULL) `,
    total_ethnicity: `(select COUNT("victim_ethnicity") FROM "victim" `,

// REFERRALS
    referral_victim_support: ` "referral_agency" IS NOT NULL   `,
    referral_other_services: ` "referral_other" IS NOT NULL   `,

//SEXUAL ORIENTATION

    bi_sexual: `"victim_sexual_orientation" = 'Bi-sexual'  `,
    gay: `"victim_sexual_orientation" = 'Gay'  `,
    hetrosexual: `"victim_sexual_orientation" = 'Hetrosexual'  `,
    lesbian: `"victim_sexual_orientation" = 'Lesbian'  `,
    other: `"victim_sexual_orientation" = 'Other' OR "victim_sexual_orientation" = 'other'  `,
    unknown: `"victim_sexual_orientation" = 'Unknown' OR "victim_sexual_orientation" = 'Unknown/pass' OR  "victim_sexual_orientation" IS NULL  `,

// SPECIAL CLASSIFICATION OF INDIVIDUALS
    disability_deaf: ` "disability_deaf" = TRUE `,
    homeless: ` "homeless" = TRUE `,
    victim_immigrant: ` "victim_immigrant" IS NOT NULL  AND "victim_immigrant" != 'No' AND "victim_immigrant" != 'Unknown' `,
    lgbtq: ` "victim_transgender" = 'yes' OR  "victim_gender" = 'transgender' OR "victim_sexual_orientation" = 'homosexual' `,
    veteran: ` "veteran" = TRUE AND   `,
    victims_with_disabilities: `  "disability_physical" = TRUE OR "disability_mental" = TRUE OR "disability_developmental" = TRUE OR "disability_other" = TRUE  `,
    limited_english: ` "limited_english" = TRUE `,
    assisted_with_victim_compensation: ` "emergency_financial" = TRUE OR "reparations_claims"= TRUE  `,

//SUPPORTED ON CALL
    supported_on_call_yes: `"supported_on_call" = 'True'  `,
    supported_on_call_no: `"supported_on_call" = 'False'  `,
    supported_on_call_unknown: `"supported_on_call" = 'unknown/hung up'  `,

//TRANSGENDERED
    victim_gender_transgender: ` "victim_gender" = 'transgender' `,

//TRANSPORTATION
    transportation_medical_exam_support: `"transportation_medical_exam_support" = TRUE  `,
    transportation_medical_accompaniment_medical: `"transportation_medical_accompaniment_medical" = TRUE `,
    transportation_medical_accompaniment_dental: `"transportation_medical_accompaniment_dental" = TRUE  `,
    all_transportation: ` "transportation_medical_exam_support" = TRUE OR  "transportation_medical_accompaniment_medical" = TRUE OR 	 "transportation_medical_accompaniment_dental" =TRUE`,

//TYPES OF VICTIM
    adultPrimaryVictim: `"victim_type" = adultPrimaryVictim `,
    adultSecondayVictim: `"victim_type" = adultSecondayVictim `,
    youthPrimaryVictim: `"victim_type" = youthPrimaryVictim `,
    youthSecondayVictim: `"victim_type" = youthSecondayVictim `,

//TYPES OF VICTIMIZATION
    violence_adult_sexual: ` "violence_adult_sexual" = TRUE AND  `,
    violence_adult_when_child_by_family: `  “violence_adult_when_child_by_family" = TRUE `,
    violence_adult_when_child_by_other: `  “violence_adult_when_child_by_other" = TRUE  `,
    violence_adult_when_child_total: `  "violence_adult_when_child_by_other" = TRUE OR 	 "violence_adult_when_child_by_family" = TRUE  `,
    violence_bullying: ` "violence_bullying" = TRUE `,
    violence_child_pornography: ` "violence_child_pornography" = TRUE   `,
    violence_minor_by_family: ` "violence_minor_by_family" = TRUE  `,
    violence_minor_by_other: `(select COUNT( * ) FROM "victim" WHERE "violence_minor_by_other" = TRUE `,
    violence_minor_total: `  ("violence_minor_by_other" = TRUE  OR "violence_minor_by_family" = TRUE) `,
    violence_domestic: ` (select COUNT( * ) FROM "victim" WHERE "violence_domestic" = TRUE `,
    violence_elder: ` (select COUNT( * ) FROM "victim" WHERE "violence_elder" = TRUE `,
    violence_exploitation_trafficking: ` (select COUNT( * ) FROM "victim" WHERE "violence_exploitation_trafficking" = TRUE `,
    violence_exposing: ` (select COUNT( * ) FROM "victim" WHERE "violence_exposing" = TRUE `,
    violence_internet: `  "violence_internet" = TRUE   `,
    violence_phone: ` "violence_phone" = TRUE  `,
    violence_harassment: ` "violence_harassment" = TRUE   `,
    violence_stalking: ` "violence_stalking" = TRUE   `,
    violence_stalking_harassment_total: ` "violence_stalking" = TRUE OR "violence_exposing" = TRUE OR  "violence_internet" = TRUE OR "violence_phone" OR 	"violence_harassment" = TRUE   `,
    violence_teen_dating: ` "violence_teen_dating" = TRUE   `,
    violence_other: ` "violence_other" = TRUE   `,
    violence_unknown:`"violence_unknown" = TRUE   `,
    victim_multiple_types_violence: `  victim_multiple_types_violence = TRUE  `,

//UN-MET NEEDS
    unmet_need_financial: `"unmet_need_financial" = TRUE   `,
    unmet_need_shelter_housing: `"unmet_need_shelter_housing" = TRUE   `,
    unmet_need_other: `"unmet_need_other" = TRUE   `,
   
//ZIP CODES
    zipcode_55111: `  "victim_zipcode" = 55111 `,
    zipcode_55305: ` "victim_zipcode" = 55305 `,
    zipcode_55311: `  "victim_zipcode" = 55311  `,
    zipcode_55316: `  "victim_zipcode" = 55316 `,
    zipcode_55317: `  "victim_zipcode" = 55317 `,
    zipcode_55327: `  "victim_zipcode" = 55327  `,
    zipcode_55328: `  "victim_zipcode" = 55328  `,
    zipcode_55331: `  "victim_zipcode" = 55331  `,
    zipcode_55340: `  "victim_zipcode" = 55340  `,
    zipcode_55341: `  "victim_zipcode" = 55341  `,
    zipcode_55343: `  "victim_zipcode" = 55343  `,
    zipcode_55344: `  "victim_zipcode" = 55344 `,
    zipcode_55345: `  "victim_zipcode" = 55345  `,
    zipcode_55346: `  "victim_zipcode" = 55346  `,
    zipcode_55347: `  "victim_zipcode" = 55347  `,
    zipcode_55357: `  "victim_zipcode" = 55357  `,
    zipcode_55359: `  "victim_zipcode" = 55359  `,
    zipcode_55361: `  "victim_zipcode" = 55361  `,
    zipcode_55364: `  "victim_zipcode" = 55364  `,
    zipcode_55369: `  "victim_zipcode" = 55369  `,
    zipcode_55373: `   "victim_zipcode" = 55373 `,
    zipcode_55374: `  "victim_zipcode" = 55374  `,
    zipcode_55375: `   "victim_zipcode" = 55375  `,
    zipcode_55384: `  "victim_zipcode" = 55384  `,  
    zipcode_55387: `  "victim_zipcode" = 55387  `,
    zipcode_55388: `  "victim_zipcode" = 55388  `,
    zipcode_55391: `  "victim_zipcode" = 55391  `,
    zipcode_55392: ` "victim_zipcode" = 55392 `,
    zipcode_55401: ` "victim_zipcode" = 55401  `,
    zipcode_55402: ` "victim_zipcode" = 55402  `,
    zipcode_55403: ` "victim_zipcode" = 55403  `,
    zipcode_55404: ` "victim_zipcode" = 55404 `,
    zipcode_55405: ` "victim_zipcode" = 55405  `,
    zipcode_55406: ` "victim_zipcode" = 55406  `,
    zipcode_55407: ` "victim_zipcode" = 55407  `,
    zipcode_55408: ` "victim_zipcode" = 55408  `,
    zipcode_55409: ` "victim_zipcode" = 55409  `,
    zipcode_55410: ` "victim_zipcode" = 55410 `,
    zipcode_55411: ` "victim_zipcode" = 55411  `,
    zipcode_55412: ` "victim_zipcode" = 55412  `,
    zipcode_55413: ` "victim_zipcode" = 55413  `,
    zipcode_55414: ` "victim_zipcode" = 55414  `,
    zipcode_55415: ` "victim_zipcode" = 55415  `,
    zipcode_55416: ` "victim_zipcode" = 55416  `,
    zipcode_55417: ` "victim_zipcode" = 55417  `,
    zipcode_55418: ` "victim_zipcode" = 55418  `,
    zipcode_55419: ` "victim_zipcode" = 55419  `,
    zipcode_55420: ` "victim_zipcode" = 55420  `,
    zipcode_55422: ` "victim_zipcode" = 55422  `,
    zipcode_55423: ` "victim_zipcode" = 55423  `,
    zipcode_55424: ` "victim_zipcode" = 55424  `,
    zipcode_55425: ` "victim_zipcode" = 55425  `,
    zipcode_55426: ` "victim_zipcode" = 55426  `,
    zipcode_55427: ` "victim_zipcode" = 55427  `,
    zipcode_55428: ` "victim_zipcode" = 55428  `,
    zipcode_55429: ` "victim_zipcode" = 55429  `,
    zipcode_55430: ` "victim_zipcode" = 55430  `,
    zipcode_55431: ` "victim_zipcode" = 55431  `,
    zipcode_55435: ` "victim_zipcode" = 55435  `,
    zipcode_55436: ` "victim_zipcode" = 55436  `,
    zipcode_55437: ` "victim_zipcode" = 55437  `,
    zipcode_55438: ` "victim_zipcode" = 55438  `,
    zipcode_55439: ` "victim_zipcode" = 55439  `,
    zipcode_55441: ` "victim_zipcode" = 55441  `,
    zipcode_55442: ` "victim_zipcode" = 55442  `,
    zipcode_55443: ` "victim_zipcode" = 55443  `,
    zipcode_55444: ` "victim_zipcode" = 55444  `,
    zipcode_55445: ` "victim_zipcode" = 55445  `,
    zipcode_55446: ` "victim_zipcode" = 55446  `,
    zipcode_55447: ` "victim_zipcode" = 55447  `,
    zipcode_55450: ` "victim_zipcode" = 55450  `,
    zipcode_55454: ` "victim_zipcode" = 55454  `,
    zipcode_55455: ` "victim_zipcode" = 55455  `,

    zipcode_other: `  
            "victim_zipcode" != 55111   AND 
            "victim_zipcode" != 55305   AND
            "victim_zipcode" != 55311   AND
            "victim_zipcode" != 55116   AND 
            "victim_zipcode" != 55317   AND
            "victim_zipcode" != 55327   AND
            "victim_zipcode" != 55328   AND 
            "victim_zipcode" != 55331   AND
            "victim_zipcode" != 55340   AND
            "victim_zipcode" != 55341   AND 
            "victim_zipcode" != 55343   AND
            "victim_zipcode" != 55344   AND
            "victim_zipcode" != 55345   AND 
            "victim_zipcode" != 55346   AND
            "victim_zipcode" != 55347   AND
            "victim_zipcode" != 55356   AND 
            "victim_zipcode" != 55357   AND
            "victim_zipcode" != 55359   AND
            "victim_zipcode" != 55361   AND 
            "victim_zipcode" != 55364   AND
            "victim_zipcode" != 55369   AND
            "victim_zipcode" != 55373   AND 
            "victim_zipcode" != 55374   AND
            "victim_zipcode" != 55375   AND
            "victim_zipcode" != 55384   AND 
            "victim_zipcode" != 55387   AND
            "victim_zipcode" != 55388   AND
            "victim_zipcode" != 55391   AND 
            "victim_zipcode" != 55392   AND
            "victim_zipcode" != 55401   AND
            "victim_zipcode" != 55402   AND 
            "victim_zipcode" != 55403   AND
            "victim_zipcode" != 55404   AND
            "victim_zipcode" != 55405   AND 
            "victim_zipcode" != 55406   AND
            "victim_zipcode" != 55407   AND
            "victim_zipcode" != 55408   AND 
            "victim_zipcode" != 55409   AND
            "victim_zipcode" != 55410   AND
            "victim_zipcode" != 55411   AND 
            "victim_zipcode" != 55412   AND
            "victim_zipcode" != 55413   AND
            "victim_zipcode" != 55414   AND 
            "victim_zipcode" != 55415   AND
            "victim_zipcode" != 55416   AND
            "victim_zipcode" != 55417   AND 
            "victim_zipcode" != 55418   AND
            "victim_zipcode" != 55419   AND
            "victim_zipcode" != 55420   AND 
            "victim_zipcode" != 55422   AND
            "victim_zipcode" != 55423   AND
            "victim_zipcode" != 55424   AND 
            "victim_zipcode" != 55425   AND
            "victim_zipcode" != 55426   AND
            "victim_zipcode" != 55427   AND 
            "victim_zipcode" != 55428   AND
            "victim_zipcode" != 55429   AND
            "victim_zipcode" != 55430   AND 
            "victim_zipcode" != 55431   AND
            "victim_zipcode" != 55435   AND
            "victim_zipcode" != 55436   AND 
            "victim_zipcode" != 55437   AND
            "victim_zipcode" != 55438   AND
            "victim_zipcode" != 55439   AND 
            "victim_zipcode" != 55441   AND
            "victim_zipcode" != 55442   AND
            "victim_zipcode" != 55443   AND 
            "victim_zipcode" != 55444   AND
            "victim_zipcode" != 55445   AND
            "victim_zipcode" != 55446   AND 
            "victim_zipcode" != 55447   AND
            "victim_zipcode" != 55450   AND
            "victim_zipcode" != 55454   AND 
            "victim_zipcode" != 55455`,
 zipcode_unkown: ` "victim_zipcode" IS NULL `
}

module.exports = customReportObject;