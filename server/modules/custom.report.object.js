let customReportObject = {

//AGE
    victim_age_zero_to_twelve: ` (select count(*) from "victim" WHERE "victim_age" BETWEEN $3 AND $4 AND 
        "contact_date" BETWEEN '2017-01-01' AND ‘2018-12-01’)`,

//CONTACT TYPE - phone in-person
    phone_contact: `(select COUNT(*) FROM "victim" WHERE "contact_type" = 'phone' AND    
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    in_person_contact: `(select COUNT(*) FROM "victim" WHERE "contact_type" = 'in-person' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

//DISABILITIES
    disability_blind: `(select COUNT( * ) FROM "victim"  WHERE "disability_blind" = TRUE AND
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    disability_physical: `(select COUNT( * ) FROM "victim"  WHERE "disability_physical" = TRUE AND
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    disability_mental: `(select COUNT( * ) FROM "victim"  WHERE "disability_mental" = TRUE AND
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    disability_deaf: `(select COUNT( * ) FROM "victim"  WHERE "disability_deaf" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    disability_developmental: `(select COUNT( * ) FROM "victim"  WHERE "disability_developmental" = TRUE AND
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    disability_unknown: `(select COUNT( * ) FROM "victim" WHERE "disability_unknown" = TRUE AND
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    disability_other: `(select COUNT( * ) FROM "victim" WHERE "disability_other" = TRUE AND
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    disability_none: `(select COUNT( * ) FROM "victim" WHERE ("disability_none" = TRUE OR "disability_none" IS NULL)
        AND "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,

//GENDER
    victim_gender_male: ` select count(*)  FROM “victim" WHERE "victim_gender" = 'Male' AND 
        "contact_date" BETWEEN $1 AND $2 ) `,
    victim_gender_female: ` select count(*)  FROM “victim" WHERE "victim_gender" = 'Female' AND 
        "contact_date" BETWEEN $1 AND $2 ) `,
    victim_gender_non_binary: ` select count(*) FROM “victim" WHERE "victim_gender" = 'Non-binary'  
        AND "contact_date" BETWEEN $1 AND $2 ) `,
    victim_gender_unknown: `SELECT COUNT(*) FROM “victim" WHERE ("victim_gender" IS NULL OR 
        "victim_gender" = ‘other') AND "contact_date" BETWEEN $1 AND $2 ) `,
    total_gender_count: `(select COUNT("victim_gender") FROM "victim" WHERE "contact_date" 
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
    total_victims: ` select count(*)  FROM “victim" WHERE "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20’ `,
    new_victim: ` select count(*)  FROM “victim" WHERE "victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR
        ("victim_prior_contact" = TRUE AND "victim_contact_prior_oct" = TRUE) AND 
        "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20' `,

//IN-PERSON CRISIS COUNSELING
    crisis_counseling_individual: `(select COUNT(*) FROM "victim" WHERE 
        "crisis_counseling_individual" = TRUE AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    crisis_counseling_group: `(select COUNT(*) FROM "victim" WHERE "crisis_counseling_group" = TRUE 
        AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

//IN-PERSON LEGAL ADVOCACY: CIVIL
    ofp_hro: `(select COUNT(*) FROM "victim" WHERE "legal_ofp_hro" = 'TRUE' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    legal_immigration: `(select COUNT(*) FROM "victim" WHERE "legal_immigration" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20’)`,
    legal_intervention: `(select COUNT(*) FROM "victim" WHERE "legal_intervention" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

//IN-PERSON LEGAL ADVOCACY: CRIMINAL
    law_enforcement_interview: `(select COUNT(*) FROM "victim" WHERE 
        "legal_law_enforcement_interview" = TRUE AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    legal_prosecution_related: `(select COUNT(*) FROM "victim" WHERE "legal_prosecution_related" = TRUE 
            AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    legal_court_advocacy: `(select COUNT(*) FROM "victim" WHERE "legal_court_advocacy" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

//IN-PERSON MEDICAL ADVOCACY
    emergency_med_care_medical: `(select COUNT(*) FROM "victim" WHERE 
            "medical_accompaniment_medical" = TRUE AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    emergency_med_care_dental: `(select COUNT(*) FROM "victim" WHERE 
            "medical_accompaniment_dental" = TRUE AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    forensic_exam: `(select COUNT(*) FROM "victim" WHERE "medical_exam_support" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,

//OTHER IN-PERSON ADVOCACY
    information_referral_person: `"information_referral" = TRUE AND "contact_type" = 'in-person' AND
    "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    safe_at_home: `"safe_at_home" = TRUE AND "contact_type" = 'in-person' AND "contact_date" 
        BETWEEN '2017-10-01' AND '2018-05-20') `,
    emergency_financial: `"emergency_financial" = TRUE AND "contact_type" = 'in-person' AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    reparations_claims: `"reparations_claims" = TRUE AND "contact_type" = 'in-person' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,

//PHONE SERVICES PROVIDED
    crisis_counseling: `"crisis_counseling" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    information_referral_person: `"information_referral" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    information_criminal_justice: `"information_criminal_justice" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    other_emergency_justice: `"other_emergency_justice" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    emergency_financial: `"emergency_financial" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    reparations_claims: `"reparations_claims" = TRUE AND "contact_type" = 'phone' AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,

//POLICE REPORT FILED
    police_report_filed_yes: `"police_report_filed" = 'True' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    police_report_filed_no: `"police_report_filed" = 'False' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    police_report_filed_unknown: `"police_report_filed" = 'Unknown' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,

 //RACE/ETHNICITY
    victim_ethnicity_asian: ` select count(*)  FROM “victim" WHERE "victim_ethnicity" = 'Asian' AND
         "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    NativeAmerican: ` select count(*)  FROM “victim" WHERE "victim_ethnicity" = 'Native American' AND 
        "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    ChicanoLatino: ` select count(*)  FROM “victim" WHERE "victim_ethnicity" = 'Chican@/Latin@' AND 
        "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    AfricanAmericanBlack: ` select count(*)  FROM “victim" WHERE "victim_ethnicity" = 
        'African American/Black' AND "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    NativeHawaiianPacificIslander: ` select count(*)  FROM “victim" WHERE "victim_ethnicity" = 
        'Native Hawaiian/Pacific Islander' AND "contact_date" BETWEEN 	'2017-10-01' AND '2018-05-20') `,
    WhiteNonLatinoCaucasian: `select count(*)  FROM “victim" WHERE "victim_ethnicity" = 
        'White non-Latino/Caucasian' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    Other: `select count(*)  FROM “victim" WHERE "victim_ethnicity" = 'Other' AND "contact_date" 
        BETWEEN '2017-10-01' AND '2018-05-20') `,
    MultiRacial: ` select count(*)  FROM “victim" WHERE "victim_ethnicity" = 'Multi-racial' AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    unknown: `select count(*)  FROM “victim" WHERE "victim_ethnicity" = 'unknown' OR 
        "victim_ethnicity" IS NULL)  AND "contact_date" BETWEEN $1 AND $2)`,
    total_ethnicity: `(select COUNT("victim_ethnicity") FROM "victim" WHERE "contact_date" 
        BETWEEN $1 AND $2)`,

// REFERRALS
    referral_victim_support: `(select COUNT(*) FROM "victim" WHERE "referral_agency" IS NOT NULL AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    referral_other_services: `(select COUNT(*) FROM "victim" WHERE "referral_other" IS NOT NULL AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

//SEXUAL ORIENTATION

    bi_sexual: `"victim_sexual_orientation" = 'Bi-sexual' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    gay: `"victim_sexual_orientation" = 'Gay' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    hetrosexual: `"victim_sexual_orientation" = 'Hetrosexual' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    lesbian: `"victim_sexual_orientation" = 'Lesbian' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    other: `("victim_sexual_orientation" = 'Other' OR "victim_sexual_orientation" = 'other' ) AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    unknown: `("victim_sexual_orientation" = 'Unknown' OR "victim_sexual_orientation" = 'Unknown/pass' OR 
        "victim_sexual_orientation" IS NULL ) AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,

// SPECIAL CLASSIFICATION OF INDIVIDUALS
    disability_deaf: `(select COUNT( * ) FROM "victim"  WHERE "disability_deaf" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND‘ 2018 - 05 - 20 ')`,
    homeless: `(select COUNT(*) FROM "victim" WHERE "homeless" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20’)`,
    victim_immigrant: `(select COUNT(*) FROM "victim" WHERE ("victim_immigrant" IS NOT NULL 
        AND "victim_immigrant" != 'No' AND "victim_immigrant" != 'Unknown') AND 	
        "contact_date" BETWEEN' 2017-10-01' AND '2018-05-20') `,
    lgbtq: `(select COUNT(*) FROM "victim" WHERE ("victim_transgender" = 'yes' OR 
        "victim_gender" = 'transgender' OR "victim_sexual_orientation" = 'homosexual')
        AND "contact_date" BETWEEN 	'2017-10-01' AND '2018-05-20')`,
    veteran: `(select COUNT(*) FROM "victim" WHERE "veteran" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    victims_with_disabilities: `(select COUNT(*) FROM "victim" WHERE 
        ("disability_physical" = TRUE OR "disability_mental" = TRUE OR
        "disability_developmental" = TRUE OR "disability_other" = TRUE) AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    limited_english: `(select COUNT(*) FROM "victim" WHERE "limited_english" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    assisted_with_victim_compensation: `(select COUNT(*) FROM "victim" WHERE 
        ("emergency_financial" = TRUE OR "reparations_claims"= TRUE )AND 
        "contact_date" BETWEEN 	'2017-10-01' AND '2018-05-20') `,

//SUPPORTED ON CALL
    supported_on_call_yes: `"supported_on_call" = 'True' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    supported_on_call_no: `"supported_on_call" = 'False' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    supported_on_call_unknown: `"supported_on_call" = 'unknown/hung up' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,

//TRANSGENDERED
    victim_gender_transgender: `("victim_gender" = 'transgender' OR "victim_gender" = 'non-binary')
        AND "contact_date" BETWEEN $1 AND $2`,

//TRANSPORTATION
    transportation_medical_exam_support: `"transportation_medical_exam_support" = TRUE 
        AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,
    transportation_medical_accompaniment_medical: `"transportation_medical_accompaniment_medical" = TRUE
        AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,
    transportation_medical_accompaniment_dental: `"transportation_medical_accompaniment_dental" = TRUE 
        AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,
    all_transportation: `(select COUNT(*) FROM "victim" WHERE 
        ("transportation_medical_exam_support" = TRUE OR 
        "transportation_medical_accompaniment_medical" = TRUE OR 	
        "transportation_medical_accompaniment_dental" =TRUE) AND 
        "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,

//TYPES OF VICTIM
    adultPrimaryVictim: `"victim_type" = adultPrimaryVictim AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,
    adultSecondayVictim: `"victim_type" = adultSecondayVictim AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,
    youthPrimaryVictim: `"victim_type" = youthPrimaryVictim AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,
    youthSecondayVictim: `"victim_type" = youthSecondayVictim AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,

//TYPES OF VICTIMIZATION
    violence_adult_sexual: `(select COUNT(*) FROM "victim" WHERE "violence_adult_sexual" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_adult_when_child_by_family: `(select COUNT(*) FROM "victim" WHERE 
        “violence_adult_when_child_by_family" = TRUE AND "contact_date" BETWEEN 
        '2017-10-01' AND ‘2018-05-20') `,
    violence_adult_when_child_by_other: `(select COUNT(*) FROM "victim" WHERE 
        “violence_adult_when_child_by_other" = TRUE AND 
        "contact_date" BETWEEN ‘2017-10-01' AND '2018-05-20') `,
    violence_adult_when_child_total: `(select COUNT(*) FROM "victim" WHERE 
        ("violence_adult_when_child_by_other" = TRUE OR 	
        "violence_adult_when_child_by_family" = TRUE) AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_bullying: `(select COUNT(*) FROM "victim" WHERE "violence_bullying" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20’)`,
    violence_child_pornography: `(select COUNT(*) FROM "victim" WHERE "violence_child_pornography" = TRUE 
        AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    violence_minor_by_family: `(select COUNT(*) FROM "victim" WHERE "violence_minor_by_family" = TRUE 
        AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_minor_by_other: `(select COUNT( * ) FROM "victim"
        WHERE "violence_minor_by_other" = TRUE AND "contact_date"
        BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_minor_total: ` (select COUNT( * ) FROM "victim" WHERE ("violence_minor_by_other" = TRUE 
        OR "violence_minor_by_family" = TRUE) AND "contact_date"
        BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_domestic: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_domestic" = TRUE AND "contact_date"
        BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_elder: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_elder" = TRUE AND "contact_date"
        BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_exploitation_trafficking: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_exploitation_trafficking" = TRUE AND "contact_date"
        BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_exposing: ` (select COUNT( * ) FROM "victim"
        WHERE "violence_exposing" = TRUE AND“ contact_date " BETWEEN '2017-10-01' AND ‘2018-05-20’)`,
    violence_internet: ` (select COUNT(*) FROM "victim" WHERE "violence_internet" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_phone: `(select COUNT(*) FROM "victim" WHERE "violence_phone" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_harassment: `(select COUNT(*) FROM "victim" WHERE "violence_harassment" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_stalking: `(select COUNT(*) FROM "victim" WHERE "violence_stalking" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_stalking_harassment_total: `(select COUNT(*) FROM "victim" WHERE 
        ("violence_stalking" = TRUE OR "violence_exposing" = TRUE OR 
        "violence_internet" = TRUE OR "violence_phone" OR 	"violence_harassment" = TRUE)
        AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    violence_teen_dating: `(select COUNT(*) FROM "victim" WHERE "violence_teen_dating" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_other: `(select COUNT(*) FROM "victim" WHERE "violence_other" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    violence_unknown: `(select COUNT(*) FROM "victim" WHERE ("violence_unknown" = TRUE) AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    victim_multiple_types_violence: `(select COUNT(*) FROM "victim" WHERE 
        victim_multiple_types_violence = TRUE AND
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

//UN-MET NEEDS
    unmet_need_financial: `"unmet_need_financial" = TRUE AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    unmet_need_shelter_housing: `"unmet_need_shelter_housing" = TRUE AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    unmet_need_other: `"unmet_need_other" = TRUE AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
   
//ZIP CODES
    zipcode_55111: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55111 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55305: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55305 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55311: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55311 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55316: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55316 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55317: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55317 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55327: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55327 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55328: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55328 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55331: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55331 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55340: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55340 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55341: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55341 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55343: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55343 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55344: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55344 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55345: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55345 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55346: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55346 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55347: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55347 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55357: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55357 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55359: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55359 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55361: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55361 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55364: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55364 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55369: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55369 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55373: `  (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55373 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55374: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55374 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55375: `  (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55375 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55384: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55384 AND "contact_date"  BETWEEN $1 AND $2) `,  
    zipcode_55387: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55387 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55388: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55388 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55391: ` (select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55391 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55392: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55392 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55401: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55401 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55402: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55402 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55403: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55403 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55404: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55404 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55405: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55405 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55406: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55406 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55407: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55407 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55408: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55408 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55409: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55409 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55410: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55410 AND "contact_date"  BETWEEN $1 AND $2)`,
    zipcode_55411: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55411 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55412: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55412 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55413: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55413 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55414: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55414 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55415: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55415 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55416: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55416 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55417: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55417 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55418: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55418 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55419: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55419 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55420: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55420 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55422: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55422 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55423: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55423 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55424: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55424 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55425: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55425 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55426: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55426 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55427: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55427 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55428: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55428 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55429: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55429 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55430: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55430 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55431: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55431 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55435: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55435 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55436: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55436 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55437: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55437 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55438: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55438 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55439: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55439 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55441: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55441 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55442: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55442 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55443: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55443 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55444: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55444 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55445: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55445 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55446: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55446 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55447: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55447 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55450: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55450 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55454: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55454 AND "contact_date"  BETWEEN $1 AND $2) `,
    zipcode_55455: `(select COUNT(*) FROM "victim" WHERE "victim_zipcode" = 55455 AND "contact_date"  BETWEEN $1 AND $2) `,

    zipcode_other: `(select Count(*) FROM "victim" WHERE  
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

        zipcode_unkown: `(SELECT COUNT(*) FROM "victim" WHERE "victim_zipcode" IS NULL AND  "contact_date"  BETWEEN $1 AND $2) `
}

module.exports = customReportObject;