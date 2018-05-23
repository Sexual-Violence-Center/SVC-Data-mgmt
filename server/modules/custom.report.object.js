let customReportObject = {

//AGE
    victim_age_zero_to_twelve: ` "victim_age" BETWEEN $3 AND $4 AND 
        "contact_date" BETWEEN $1 AND $2)`,

//CONTACT TYPE - phone in-person
    phone_contact: ` "contact_type" = 'phone' AND    
        "contact_date" BETWEEN $1 AND $2)`,
    in_person_contact: ` "contact_type" = 'in-person' AND
        "contact_date" BETWEEN $1 AND $2)`,

//DISABILITIES
    disability_blind: ` "disability_blind" = TRUE AND
        "contact_date" BETWEEN $1 AND $2)`,
    disability_physical: ` "disability_physical" = TRUE AND
        "contact_date" BETWEEN $1 AND $2)`,
    disability_mental: ` "disability_mental" = TRUE AND
        "contact_date" BETWEEN $1 AND $2)`,
    disability_deaf: ` "disability_deaf" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    disability_developmental: ` "disability_developmental" = TRUE AND
        "contact_date" BETWEEN $1 AND $2)`,
    disability_unknown: ` "disability_unknown" = TRUE AND
        "contact_date" BETWEEN $1 AND $2)`,
    disability_other: ` "disability_other" = TRUE AND
        "contact_date" BETWEEN $1 AND $2)`,
    disability_none: ` ("disability_none" = TRUE OR "disability_none" IS NULL)
        AND "contact_date" BETWEEN $1 AND $2)`,

//GENDER
    victim_gender_male: `  "victim_gender" = 'Male' AND 
        "contact_date" BETWEEN $1 AND $2 ) `,
    victim_gender_female: `  "victim_gender" = 'Female' AND 
        "contact_date" BETWEEN $1 AND $2 ) `,
    victim_gender_non_binary: `  "victim_gender" = 'Non-binary'  
        AND "contact_date" BETWEEN $1 AND $2 ) `,
    victim_gender_unknown: ` ("victim_gender" IS NULL OR 
        "victim_gender" = ‘other') AND "contact_date" BETWEEN $1 AND $2 ) `,
    total_gender_count: ` "contact_date" 
        BETWEEN $1 AND $2)`,

//IMMIGRANT COUNTRY
    immigrant_africa: `"victim_immigrant"='Africa' AND "contact_date" BETWEEN $1 AND $2 ) `, 
    immigrant_asia: `"victim_immigrant"='Asia' AND "contact_date" BETWEEN $1 AND $2 ) `, 
    immigrant_europe: `"victim_immigrant"='Europe' AND "contact_date" BETWEEN $1 AND $2 ) `, 
    immigrant_mex_cen_so_america: `"victim_immigrant"='Mex/Cen/So America' AND 
        "contact_date" BETWEEN $1 AND $2 ) `,
    immigrant_middle_east: `"victim_immigrant"='Middle East' AND "contact_date" BETWEEN $1 AND $2 ) `,
    immigrant_no: `"victim_immigrant"='No' AND "contact_date" BETWEEN $1 AND $2 ) `,
    immigrant_unknown: `("victim_immigrant"='Unknown' OR "victim_immigrant IS NULL) AND "contact_date" BETWEEN $1 AND $2 ) `,
    immigrant_other: `"victim_immigrant"='Other' AND "contact_date" BETWEEN $1 AND $2 ) `,

//INDIVIDUALS SERVICED - TOTAL AND NEW
    total_victims: `  "contact_date" BETWEEN $1 AND  $2 `,
    new_victim: `  "victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR
        ("victim_prior_contact" = TRUE AND "victim_contact_prior_oct" = TRUE) AND 
        "contact_date" BETWEEN $1 AND  $2 `,

//IN-PERSON CRISIS COUNSELING
    crisis_counseling_individual: ` 
        "crisis_counseling_individual" = TRUE AND "contact_date" BETWEEN $1 AND $2)`,
    crisis_counseling_group: ` "crisis_counseling_group" = TRUE 
        AND "contact_date" BETWEEN $1 AND $2)`,

//IN-PERSON LEGAL ADVOCACY: CIVIL
    ofp_hro: ` "legal_ofp_hro" = 'TRUE' AND
        "contact_date" BETWEEN $1 AND $2)`,
    legal_immigration: ` "legal_immigration" = TRUE AND 
        "contact_date" BETWEEN $1 AND  $2)`,
    legal_intervention: ` "legal_intervention" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,

//IN-PERSON LEGAL ADVOCACY: CRIMINAL
    law_enforcement_interview: ` 
        "legal_law_enforcement_interview" = TRUE AND "contact_date" BETWEEN $1 AND $2)`,
    legal_prosecution_related: ` "legal_prosecution_related" = TRUE 
            AND "contact_date" BETWEEN $1 AND $2)`,
    legal_court_advocacy: ` "legal_court_advocacy" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,

//IN-PERSON MEDICAL ADVOCACY
    emergency_med_care_medical: ` 
            "medical_accompaniment_medical" = TRUE AND "contact_date" BETWEEN $1 AND $2)`,
    emergency_med_care_dental: ` 
            "medical_accompaniment_dental" = TRUE AND "contact_date" BETWEEN $1 AND $2)`,
    forensic_exam: ` "medical_exam_support" = TRUE AND 
            "contact_date" BETWEEN $1 AND $2) `,

//OTHER IN-PERSON ADVOCACY
    information_referral_person: `"information_referral" = TRUE AND "contact_type" = 'in-person' AND
    "contact_date" BETWEEN $1 AND $2) `,
    safe_at_home: `"safe_at_home" = TRUE AND "contact_type" = 'in-person' AND "contact_date" 
        BETWEEN $1 AND $2) `,
    emergency_financial: `"emergency_financial" = TRUE AND "contact_type" = 'in-person' AND 
        "contact_date" BETWEEN $1 AND $2) `,
    reparations_claims: `"reparations_claims" = TRUE AND "contact_type" = 'in-person' AND
        "contact_date" BETWEEN $1 AND $2) `,

//PHONE SERVICES PROVIDED
    crisis_counseling: `"crisis_counseling" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN $1 AND $2) `,
    information_referral_person: `"information_referral" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN $1 AND $2) `,
    information_criminal_justice: `"information_criminal_justice" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN $1 AND $2) `,
    other_emergency_justice: `"other_emergency_justice" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN $1 AND $2) `,
    emergency_financial: `"emergency_financial" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN $1 AND $2) `,
    reparations_claims: `"reparations_claims" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN $1 AND $2) `,

//POLICE REPORT FILED
    police_report_filed_yes: `"police_report_filed" = 'True' AND "contact_date" BETWEEN $1 AND $2) `,
    police_report_filed_no: `"police_report_filed" = 'False' AND "contact_date" BETWEEN $1 AND $2) `,
    police_report_filed_unknown: `"police_report_filed" = 'Unknown' AND "contact_date" BETWEEN $1 AND $2) `,

 //RACE/ETHNICITY
    victim_ethnicity_asian: `  "victim_ethnicity" = 'Asian' AND
         "contact_date" BETWEEN $1 AND $2) `,
    NativeAmerican: `  "victim_ethnicity" = 'Native American' AND 
        "contact_date" BETWEEN  $1 AND $2) `,
    ChicanoLatino: `  "victim_ethnicity" = 'Chican@/Latin@' AND 
        "contact_date" BETWEEN  $1 AND $2) `,
    AfricanAmericanBlack: `  "victim_ethnicity" = 
        'African American/Black' AND "contact_date" BETWEEN  $1 AND $2) `,
    NativeHawaiianPacificIslander: `  "victim_ethnicity" = 
        'Native Hawaiian/Pacific Islander' AND "contact_date" BETWEEN 	$1 AND $2) `,
    WhiteNonLatinoCaucasian: ` "victim_ethnicity" = 
        'White non-Latino/Caucasian' AND "contact_date" BETWEEN $1 AND $2) `,
    Other: ` "victim_ethnicity" = 'Other' AND "contact_date" 
        BETWEEN $1 AND $2) `,
    MultiRacial: `  "victim_ethnicity" = 'Multi-racial' AND 
        "contact_date" BETWEEN $1 AND $2) `,
    unknown: ` "victim_ethnicity" = 'unknown' OR 
        "victim_ethnicity" IS NULL)  AND "contact_date" BETWEEN $1 AND $2)`,
    total_ethnicity: `(select COUNT("victim_ethnicity") FROM "victim" WHERE "contact_date" 
        BETWEEN $1 AND $2)`,

// REFERRALS
    referral_victim_support: ` "referral_agency" IS NOT NULL AND
        "contact_date" BETWEEN $1 AND $2) `,
    referral_other_services: ` "referral_other" IS NOT NULL AND 
        "contact_date" BETWEEN $1 AND $2)`,

//SEXUAL ORIENTATION

    bi_sexual: `"victim_sexual_orientation" = 'Bi-sexual' AND "contact_date" BETWEEN $1 AND $2) `,
    gay: `"victim_sexual_orientation" = 'Gay' AND "contact_date" BETWEEN $1 AND $2) `,
    hetrosexual: `"victim_sexual_orientation" = 'Hetrosexual' AND "contact_date" BETWEEN $1 AND $2) `,
    lesbian: `"victim_sexual_orientation" = 'Lesbian' AND "contact_date" BETWEEN $1 AND $2) `,
    other: `("victim_sexual_orientation" = 'Other' OR "victim_sexual_orientation" = 'other' ) AND "contact_date" BETWEEN $1 AND $2) `,
    unknown: `("victim_sexual_orientation" = 'Unknown' OR "victim_sexual_orientation" = 'Unknown/pass' OR 
        "victim_sexual_orientation" IS NULL ) AND 
        "contact_date" BETWEEN $1 AND $2) `,

// SPECIAL CLASSIFICATION OF INDIVIDUALS
    disability_deaf: ` "disability_deaf" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    homeless: ` "homeless" = TRUE AND 
        "contact_date" BETWEEN $1 AND  $2)`,
    victim_immigrant: ` ("victim_immigrant" IS NOT NULL 
        AND "victim_immigrant" != 'No' AND "victim_immigrant" != 'Unknown') AND 	
        "contact_date" BETWEEN' 2017-10-01' AND $2) `,
    lgbtq: ` ("victim_transgender" = 'yes' OR 
        "victim_gender" = 'transgender' OR "victim_sexual_orientation" = 'homosexual')
        AND "contact_date" BETWEEN 	$1 AND $2)`,
    veteran: ` "veteran" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) `,
    victims_with_disabilities: ` 
        ("disability_physical" = TRUE OR "disability_mental" = TRUE OR
        "disability_developmental" = TRUE OR "disability_other" = TRUE) AND 
        "contact_date" BETWEEN $1 AND $2) `,
    limited_english: ` "limited_english" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    assisted_with_victim_compensation: ` 
        ("emergency_financial" = TRUE OR "reparations_claims"= TRUE )AND 
        "contact_date" BETWEEN 	$1 AND $2) `,

//SUPPORTED ON CALL
    supported_on_call_yes: `"supported_on_call" = 'True' AND "contact_date" BETWEEN $1 AND $2) `,
    supported_on_call_no: `"supported_on_call" = 'False' AND "contact_date" BETWEEN $1 AND $2) `,
    supported_on_call_unknown: `"supported_on_call" = 'unknown/hung up' AND "contact_date" BETWEEN $1 AND $2) `,

//TRANSGENDERED
    victim_gender_transgender: `("victim_gender" = 'transgender' OR "victim_gender" = 'non-binary')
        AND "contact_date" BETWEEN $1 AND $2`,

//TRANSPORTATION
    transportation_medical_exam_support: `"transportation_medical_exam_support" = TRUE 
        AND "contact_date" BETWEEN $1 AND  $2)`,
    transportation_medical_accompaniment_medical: `"transportation_medical_accompaniment_medical" = TRUE
        AND "contact_date" BETWEEN $1 AND  $2)`,
    transportation_medical_accompaniment_dental: `"transportation_medical_accompaniment_dental" = TRUE 
        AND "contact_date" BETWEEN $1 AND  $2)`,
    all_transportation: ` 
        ("transportation_medical_exam_support" = TRUE OR 
        "transportation_medical_accompaniment_medical" = TRUE OR 	
        "transportation_medical_accompaniment_dental" =TRUE) AND 
        "contact_date" BETWEEN $1 AND  $2)`,

//TYPES OF VICTIM
    adultPrimaryVictim: `"victim_type" = adultPrimaryVictim AND "contact_date" BETWEEN $1 AND  $2)`,
    adultSecondayVictim: `"victim_type" = adultSecondayVictim AND "contact_date" BETWEEN $1 AND  $2)`,
    youthPrimaryVictim: `"victim_type" = youthPrimaryVictim AND "contact_date" BETWEEN $1 AND  $2)`,
    youthSecondayVictim: `"victim_type" = youthSecondayVictim AND "contact_date" BETWEEN $1 AND  $2)`,

//TYPES OF VICTIMIZATION
    violence_adult_sexual: ` "violence_adult_sexual" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_adult_when_child_by_family: ` 
        “violence_adult_when_child_by_family" = TRUE AND "contact_date" BETWEEN 
        $1 AND  $2) `,
    violence_adult_when_child_by_other: ` 
        “violence_adult_when_child_by_other" = TRUE AND 
        "contact_date" BETWEEN ‘2017-10-01' AND $2) `,
    violence_adult_when_child_total: ` 
        ("violence_adult_when_child_by_other" = TRUE OR 	
        "violence_adult_when_child_by_family" = TRUE) AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_bullying: ` "violence_bullying" = TRUE AND 
        "contact_date" BETWEEN $1 AND  $2)`,
    violence_child_pornography: ` "violence_child_pornography" = TRUE 
        AND "contact_date" BETWEEN $1 AND $2) `,
    violence_minor_by_family: ` "violence_minor_by_family" = TRUE 
        AND "contact_date" BETWEEN $1 AND $2)`,
    violence_minor_by_other: `(select COUNT( * ) FROM "victim"
        WHERE "violence_minor_by_other" = TRUE AND "contact_date"
        BETWEEN $1 AND $2)`,
    violence_minor_total: `  ("violence_minor_by_other" = TRUE 
        OR "violence_minor_by_family" = TRUE) AND "contact_date"
        BETWEEN $1 AND $2)`,
    violence_domestic: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_domestic" = TRUE AND "contact_date"
        BETWEEN $1 AND $2)`,
    violence_elder: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_elder" = TRUE AND "contact_date"
        BETWEEN $1 AND $2)`,
    violence_exploitation_trafficking: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_exploitation_trafficking" = TRUE AND "contact_date"
        BETWEEN $1 AND $2)`,
    violence_exposing: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_exposing" = TRUE AND“ contact_date " BETWEEN $1 AND  $2)`,
    violence_internet: `  "violence_internet" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_phone: ` "violence_phone" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_harassment: ` "violence_harassment" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_stalking: ` "violence_stalking" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_stalking_harassment_total: ` 
        ("violence_stalking" = TRUE OR "violence_exposing" = TRUE OR 
        "violence_internet" = TRUE OR "violence_phone" OR 	"violence_harassment" = TRUE)
        AND "contact_date" BETWEEN $1 AND $2) `,
    violence_teen_dating: ` "violence_teen_dating" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_other: ` "violence_other" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2)`,
    violence_unknown: ` ("violence_unknown" = TRUE) AND 
        "contact_date" BETWEEN $1 AND $2)`,
    victim_multiple_types_violence: ` 
        victim_multiple_types_violence = TRUE AND
        "contact_date" BETWEEN $1 AND $2)`,

//UN-MET NEEDS
    unmet_need_financial: `"unmet_need_financial" = TRUE AND "contact_date" BETWEEN $1 AND $2) `,
    unmet_need_shelter_housing: `"unmet_need_shelter_housing" = TRUE AND "contact_date" BETWEEN $1 AND $2) `,
    unmet_need_other: `"unmet_need_other" = TRUE AND "contact_date" BETWEEN $1 AND $2) `,
   
//ZIP CODES
    zipcode_55111: `  "victim_zipcode" = 55111 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55305: ` "victim_zipcode" = 55305 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55311: `  "victim_zipcode" = 55311 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55316: `  "victim_zipcode" = 55316 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55317: `  "victim_zipcode" = 55317 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55327: `  "victim_zipcode" = 55327 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55328: `  "victim_zipcode" = 55328 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55331: `  "victim_zipcode" = 55331 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55340: `  "victim_zipcode" = 55340 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55341: `  "victim_zipcode" = 55341 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55343: `  "victim_zipcode" = 55343 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55344: `  "victim_zipcode" = 55344 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55345: `  "victim_zipcode" = 55345 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55346: `  "victim_zipcode" = 55346 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55347: `  "victim_zipcode" = 55347 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55357: `  "victim_zipcode" = 55357 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55359: `  "victim_zipcode" = 55359 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55361: `  "victim_zipcode" = 55361 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55364: `  "victim_zipcode" = 55364 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55369: `  "victim_zipcode" = 55369 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55373: `   "victim_zipcode" = 55373 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55374: `  "victim_zipcode" = 55374 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55375: `   "victim_zipcode" = 55375 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55384: `  "victim_zipcode" = 55384 AND "contact_date"  BETWEEN $1 AND $2) `,  
    zipcode_55387: `  "victim_zipcode" = 55387 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55388: `  "victim_zipcode" = 55388 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55391: `  "victim_zipcode" = 55391 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55392: ` "victim_zipcode" = 55392 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55401: ` "victim_zipcode" = 55401 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55402: ` "victim_zipcode" = 55402 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55403: ` "victim_zipcode" = 55403 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55404: ` "victim_zipcode" = 55404 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55405: ` "victim_zipcode" = 55405 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55406: ` "victim_zipcode" = 55406 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55407: ` "victim_zipcode" = 55407 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55408: ` "victim_zipcode" = 55408 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55409: ` "victim_zipcode" = 55409 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55410: ` "victim_zipcode" = 55410 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55411: ` "victim_zipcode" = 55411 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55412: ` "victim_zipcode" = 55412 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55413: ` "victim_zipcode" = 55413 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55414: ` "victim_zipcode" = 55414 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55415: ` "victim_zipcode" = 55415 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55416: ` "victim_zipcode" = 55416 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55417: ` "victim_zipcode" = 55417 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55418: ` "victim_zipcode" = 55418 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55419: ` "victim_zipcode" = 55419 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55420: ` "victim_zipcode" = 55420 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55422: ` "victim_zipcode" = 55422 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55423: ` "victim_zipcode" = 55423 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55424: ` "victim_zipcode" = 55424 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55425: ` "victim_zipcode" = 55425 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55426: ` "victim_zipcode" = 55426 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55427: ` "victim_zipcode" = 55427 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55428: ` "victim_zipcode" = 55428 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55429: ` "victim_zipcode" = 55429 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55430: ` "victim_zipcode" = 55430 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55431: ` "victim_zipcode" = 55431 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55435: ` "victim_zipcode" = 55435 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55436: ` "victim_zipcode" = 55436 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55437: ` "victim_zipcode" = 55437 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55438: ` "victim_zipcode" = 55438 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55439: ` "victim_zipcode" = 55439 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55441: ` "victim_zipcode" = 55441 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55442: ` "victim_zipcode" = 55442 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55443: ` "victim_zipcode" = 55443 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55444: ` "victim_zipcode" = 55444 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55445: ` "victim_zipcode" = 55445 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55446: ` "victim_zipcode" = 55446 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55447: ` "victim_zipcode" = 55447 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55450: ` "victim_zipcode" = 55450 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55454: ` "victim_zipcode" = 55454 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55455: ` "victim_zipcode" = 55455 AND "contact_date"  BETWEEN $1 AND $2) `,

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
            "victim_zipcode" != 55455   AND
            "contact_date"  BETWEEN $1 AND $2)`,

        zipcode_unkown: ` "victim_zipcode" IS NULL AND  "contact_date"  BETWEEN $1 AND $2) `
}

module.exports = customReportObject;