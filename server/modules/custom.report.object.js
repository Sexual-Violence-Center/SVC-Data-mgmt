let object = {
    total_victims: ` "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20’ `,
    new_victim: ` "victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
        ("victim_prior_contact" = TRUE AND ("victim_contact_prior_oct" = FALSE OR 
        "victim_contact_prior_oct" IS NULL)) AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20' `,

 //ETHNICITIES
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

//AGE
    victim_age_zero_to_twelve: ` (select count(*) from "victim" WHERE "victim_age" BETWEEN 0 AND 12 AND 
        "contact_date" BETWEEN '2017-01-01' AND ‘2018-12-01’)`,
    victim_age_thirteen_to_seventeen: `(select count(*) from "victim" WHERE "victim_age" BETWEEN 13 AND 17 
        AND "contact_date" BETWEEN '2017-01-01' AND ‘2018-12-01’)`,
    victim_age_eighteen_to_twentyfour: ` (select count(*) from "victim" WHERE "victim_age" BETWEEN 18 AND 24
        AND "contact_date" BETWEEN '2017-01-01' AND ‘2018-12-01')`,
    victim_age_twentyfive_to_fiftynine: `(select count(*) from "victim" WHERE "victim_age" BETWEEN 
        25 AND 59 AND 	"contact_date" BETWEEN '2017-01-01' AND ‘2018-12-01')`,
    victim_age_sixty_and_older: ` (select count(*) from "victim" WHERE "victim_age" >= 60 AND 
        "contact_date" BETWEEN '2017-10-01' AND ‘2018-12-01’)`,
    victim_age_unknown: `(select count(*) from "victim" WHERE "victim_age" IS NULL AND 
        "contact_date" BETWEEN '2017-01-01' AND ‘2018-12-01')`,
    total_age_count: `(select COUNT("victim_age") FROM “victim")`,

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
    violence_bullying: `(select COUNT(*) FROM "victim" WHERE "violence_bullying" = TRUE AND 
        "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
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

// COUNTS FOR - (A) Information & Referral: Total services provided during the reporting period
        info_criminal_justice_process: `(select COUNT(*) FROM "victim" WHERE 
            ("legal_court_advocacy" = TRUE OR "information_criminal_justice" = TRUE OR
            "legal_law_enforcement_interview" = TRUE OR "legal_prosecution_related" = TRUE) AND 
            "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,
        info_victims_rights: `(select COUNT(*) FROM "victim" WHERE "contact_type" = 'in-person' AND 
            ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
            ("victim_prior_contact" = TRUE AND ("victim_contact_prior_oct" = FALSE OR 
            "victim_contact_prior_oct" IS NULL))) AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        referral_victim_support: `(select COUNT(*) FROM "victim" WHERE "referral_agency" IS NOT NULL AND
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
        referral_other_services: `(select COUNT(*) FROM "victim" WHERE "referral_other" IS NOT NULL AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

// COUNTS FOR - (B) Personal Advocacy/Accompaniment: Total services provided during the reporting period
        emergency_med_care: `(select COUNT(*) FROM "victim" WHERE 
            ("medical_accompaniment_medical" = TRUE OR "medical_accompaniment_dental" = TRUE ) AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        forensic_exam: `(select COUNT(*) FROM "victim" WHERE "medical_exam_support" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
        law_enforcement_interview: `(select COUNT(*) FROM "victim" WHERE 
            "legal_law_enforcement_interview" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        legal_immigration: `(select COUNT(*) FROM "victim" WHERE "legal_immigration" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20’)`,
        legal_intervention: `(select COUNT(*) FROM "victim" WHERE "legal_intervention" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
        transportation: `(select COUNT(*) FROM "victim" WHERE 
            ("transportation_medical_exam_support" = TRUE OR 
            "transportation_medical_accompaniment_medical" = TRUE OR 	
            "transportation_medical_accompaniment_dental" =TRUE) AND 
            "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,

// COUNTS FOR  - (C) Emotional Support of Safety Services: Total services provided during the reporting period
        crisis_intervention: `(select COUNT(*) FROM "victim" WHERE 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        hotline_intervention: `(select COUNT(*) FROM "victim" WHERE "contact_type" = 'phone' AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        crisis_counseling_individual: `(select COUNT(*) FROM "victim" WHERE 
            "crisis_counseling_individual" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        crisis_counseling_group: `(select COUNT(*) FROM "victim" WHERE "crisis_counseling_group" = TRUE 
            AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        emergency_financial: `(select COUNT(*) FROM "victim" WHERE "emergency_financial" = TRUE 
            AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

// COUNTS FOR - (E) Criminal/Civil Justice System Assistance: Total services provided during the reporting period
        ofp_hro: `(select COUNT(*) FROM "victim" WHERE "legal_ofp_hro" = 'TRUE' AND
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        other_emergency_justice: `(select COUNT(*) FROM "victim" WHERE "other_emergency_justice" = 'TRUE' 
            AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        legal_immigration: `(select COUNT(*) FROM "victim" WHERE "legal_immigration" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
        legal_prosecution_related: `(select COUNT(*) FROM "victim" WHERE "legal_prosecution_related" = TRUE 
            AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        legal_law_enforcement_interview: `(select COUNT(*) FROM "victim" WHERE 
            "legal_law_enforcement_interview" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
        legal_court_advocacy: `(select COUNT(*) FROM "victim" WHERE "legal_court_advocacy" = TRUE AND 
            "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,

// --TOTAL A SERVICES UNIQUE 
    total_A_information_referral: `(SELECT  COUNT(*) FROM "victim"
    WHERE ("legal_court_advocacy" = TRUE  OR 	
		"information_criminal_justice" = TRUE OR 
		"legal_law_enforcement_interview" = TRUE OR 
		"legal_prosecution_related" = TRUE OR 	
		"referral_agency" IS NOT NULL OR 
		"referral_other" IS NOT NULL)
	AND "contact_date" BETWEEN '2017-10-01' AND ‘2018-05-20')`,


//TOTAL B SERVICES UNIQUE 
    total_B_personal_advocacy_accompaniment: `(SELECT  COUNT(*) FROM "victim" 
    WHERE (("medical_accompaniment_medical" = TRUE OR 
		"medical_accompaniment_dental" = TRUE) OR 	
		"medical_exam_support" = TRUE OR 
		"legal_law_enforcement_interview" = TRUE OR 
		"legal_immigration" = TRUE OR 
		"legal_intervention" = TRUE OR 
		("transportation_medical_exam_support" = TRUE OR 
		"transportation_medical_accompaniment_medical" = TRUE OR
        "transportation_medical_accompaniment_dental" =TRUE))
	AND ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
        ("victim_prior_contact" = TRUE AND 
        ("victim_contact_prior_oct" = FALSE OR
        "victim_contact_prior_oct" IS NULL))) 
	
    AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`,
    
//TOTAL C SERVICES UNIQUE
    total_C_Emotional_support_safety_service: `(SELECT  COUNT(*) FROM "victim" 
    WHERE ("contact_type" = 'phone' OR
        "contact_type" = 'in-person' OR
        "crisis_counseling_individual" = TRUE OR
        "crisis_counseling_group" = TRUE OR	
        "emergency_financial" = TRUE)
	AND ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
        ("victim_prior_contact" = TRUE AND 
        ("victim_contact_prior_oct" = FALSE OR
        "victim_contact_prior_oct" IS NULL))) 
	AND "contact_date" BETWEEN 	'2017-10-01' AND '2018-05-20')`,

//TOTAL E SERVICES UNIQUE
    total_E_criminal_civil_justice_system: `(SELECT  COUNT(*) FROM "victim" 
    WHERE ("legal_ofp_hro" = 'TRUE' OR
        "other_emergency_justice" = 'TRUE' OR
        "legal_immigration" = TRUE OR
        "legal_prosecution_related" = TRUE OR	
        "legal_law_enforcement_interview" = TRUE OR
        "legal_court_advocacy" = TRUE)
	AND ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
        ("victim_prior_contact" = TRUE AND 
        ("victim_contact_prior_oct" = FALSE OR
        "victim_contact_prior_oct" IS NULL))) 
	AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20')`      
}