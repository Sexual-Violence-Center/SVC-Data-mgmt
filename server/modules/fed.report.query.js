// const express = require("express");
// const pool = require("../modules/pool");

/*This is the SQL code for all federal reporting. 
There is one query which is exported to report.federal.router.js.
Sections are separated in accordance with the headers on the federal report.
*/

let fedQueryText =
`SELECT 
	(select COUNT(*) FROM "victim" WHERE "contact_date" BETWEEN $1 AND $2) as total_victims,
    (select COUNT(*) FROM "victim"  WHERE ("victim_prior_contact" = FALSE OR 	
        "victim_prior_contact" 	is NULL OR("victim_prior_contact" = TRUE AND 
        "victim_contact_prior_oct" = TRUE)) AND 
        "contact_date" BETWEEN $1 AND $2) as "new_victim", ` +
	
// COUNTS FOR  - Demographics
    `(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'Asian' 
        AND "contact_date" BETWEEN $1 AND $2) as "victim_ethnicity_asian",
    (select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'Native American' 
        AND "contact_date" BETWEEN $1 AND $2) as "Native_American",
    (select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'Chican@/Latin@' 
        AND "contact_date" BETWEEN $1 AND $2) as "hispanicOrLatino",
    (select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'African American/Black' 
        AND "contact_date" BETWEEN $1 AND $2) as "africanAmerican",
    (select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'Native Hawaiian/Pacific Islander' 
        AND "contact_date" BETWEEN $1 AND $2) as "pacificIslanderHawaiian",
    (select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'White non-Latino/Caucasian' 
        AND "contact_date" BETWEEN $1 AND $2) as "white",
    (select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'Other' 
        AND "contact_date" BETWEEN 	$1 AND $2) as "Other",
    (select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'Multi-racial' 
        AND "contact_date" BETWEEN $1 AND $2) as "multiple_races",
    (select COUNT(*) FROM "victim" WHERE ("victim_ethnicity" = 'unknown' OR "victim_ethnicity" IS NULL)  
        AND "contact_date" BETWEEN $1 AND $2) as "not_reported",
    (select COUNT("victim_ethnicity") FROM "victim" WHERE "contact_date" 
        BETWEEN $1 AND $2) as "total_ethnicity", ` +
	
// COUNTS FOR  - Gender
`(select count(*) FROM "victim" WHERE "victim_gender" = 'Male'
AND "contact_date" BETWEEN $1 AND $2 ) as victim_gender_male,
(select count(*) FROM "victim" WHERE "victim_gender" = 'Female'
AND "contact_date" BETWEEN     $1 AND $2 ) as victim_gender_female,
(select count(*) FROM "victim" WHERE  "victim_gender" = 'Non-binary'
AND "contact_date" BETWEEN $1 AND $2 ) as victim_gender_non_binary,
(select count(*) FROM "victim" WHERE "victim_gender" = 'other'
AND "contact_date" BETWEEN $1 AND $2 ) as victim_gender_other,
(select count(*) FROM "victim" WHERE "victim_gender" IS NULL
AND "contact_date" BETWEEN $1 AND $2 ) as victim_gender_unknown,
(select COUNT("victim_gender") FROM "victim" WHERE "contact_date"
BETWEEN $1 AND $2) as "total_gender_count",` +
    
//COUNTS FOR  - Age
    `(select count(*) from "victim" WHERE "victim_age" BETWEEN 0 AND 12 
        AND "contact_date" BETWEEN $1 AND $2) as victim_age_zero_to_twelve,
    (select count(*) from "victim" WHERE "victim_age" BETWEEN 13 AND 17 
        AND "contact_date" BETWEEN $1 AND $2) as victim_age_thirteen_to_seventeen,
    (select count(*) from "victim" WHERE "victim_age" BETWEEN 18 AND 24 
        AND "contact_date" BETWEEN $1 AND $2) as victim_age_eighteen_to_twentyfour,
    (select count(*) from "victim" WHERE "victim_age" BETWEEN 25 AND 59 
        AND "contact_date" BETWEEN $1 AND $2) as victim_age_twentyfive_to_fiftynine,
    (select count(*) from "victim" WHERE "victim_age" >= 60 
       AND "contact_date" BETWEEN $1 AND $2) as victim_age_sixty_and_older,
    (select count(*) from "victim" WHERE "victim_age" IS NULL 
       AND "contact_date" BETWEEN $1 AND $2) as victim_age_unknown,
    (select COUNT("victim_age") FROM "victim" WHERE "contact_date" BETWEEN $1 AND $2) 
        as "total_age_count", ` + 
   	
//COUNTS FOR  -  Types of Victimization
    `(select COUNT(*) FROM "victim" WHERE "violence_adult_sexual" = TRUE 
        AND "contact_date" BETWEEN 	$1 AND $2) as "violence_adult_sexual",
    (select COUNT(*) FROM "victim" WHERE "violence_adult_when_child_by_family" = TRUE 
        AND "contact_date" BETWEEN 	$1 AND $2) as "violence_adult_when_child_by_family",
    (select COUNT(*) FROM "victim" WHERE "violence_adult_when_child_by_other" = TRUE 
        AND "contact_date" BETWEEN 	$1 AND $2) as "violence_adult_when_child_by_other",
    (select COUNT(*) FROM "victim" WHERE ("violence_adult_when_child_by_other" = TRUE 
        OR "violence_adult_when_child_by_family" = TRUE) AND "contact_date" BETWEEN $1 
        AND $2) as "violence_adult_when_child_total",
    (select COUNT(*) FROM "victim" WHERE "violence_bullying" = TRUE AND "contact_date" 
        BETWEEN $1 AND $2) as "violence_bullying",
    (select COUNT(*) FROM "victim" WHERE "violence_bullying" = TRUE AND "contact_date" 
        BETWEEN $1 AND $2) as "violence_bullying",
    (select COUNT(*) FROM "victim" WHERE "violence_child_pornography" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_child_pornography",
    (select COUNT(*) FROM "victim" WHERE "violence_minor_by_family" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_minor_by_family",
    (select COUNT(*) FROM "victim" WHERE "violence_minor_by_other" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_minor_by_other",
    (select COUNT(*) FROM "victim" WHERE ("violence_minor_by_other" = TRUE OR 	
        "violence_minor_by_family" = TRUE) AND "contact_date" BETWEEN $1 AND $2) as "violence_minor_total",
    (select COUNT(*) FROM "victim" WHERE "violence_domestic" = TRUE AND 
        "contact_date" BETWEEN 	$1 AND $2) as "violence_domestic",
    (select COUNT(*) FROM "victim" WHERE "violence_elder" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_elder",
    (select COUNT(*) FROM "victim" WHERE "violence_exploitation_trafficking" = TRUE AND 
        "contact_date" 	BETWEEN $1 AND $2) as "violence_exploitation_trafficking",
    (select COUNT(*) FROM "victim" WHERE "violence_exposing" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_exposing",
    (select COUNT(*) FROM "victim" WHERE "violence_internet" = TRUE AND 
        "contact_date" BETWEEN	$1 AND $2) as "violence_internet",
    (select COUNT(*) FROM "victim" WHERE "violence_phone" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_phone",
    (select COUNT(*) FROM "victim" WHERE "violence_harassment" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_harassment",
    (select COUNT(*) FROM "victim" WHERE "violence_stalking" = TRUE AND 
        "contact_date" BETWEEN	$1 AND $2) as "violence_stalking",
    (select COUNT(*) FROM "victim" WHERE ("violence_stalking" = TRUE OR 
        "violence_exposing" = TRUE OR "violence_internet" = TRUE OR "violence_phone" OR 
        "violence_harassment" = TRUE )AND 	"contact_date" 	BETWEEN $1 AND $2) 
        as "violence_stalking_harassment_total",
    (select COUNT(*) FROM "victim" WHERE "violence_teen_dating" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_teen_dating",
    (select COUNT(*) FROM "victim" WHERE "violence_other" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "violence_other",
    (select COUNT(*) FROM "victim" WHERE ("violence_unknown" = TRUE) 
        AND "contact_date" BETWEEN $1 AND 	$2) as "violence_unknown",
    (select COUNT(*) FROM "victim" WHERE victim_multiple_types_violence = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "victim_multiple_types_violence", ` +
	
// COUNTS FOR  -  Types of Victimization: Special classification of individuals
    `(select COUNT(*) FROM "victim" WHERE "disability_deaf" = TRUE 
        AND "contact_date" BETWEEN $1 AND $2) as "disability_deaf",
    (select COUNT(*) FROM "victim" WHERE "homeless" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "homeless",
    (select COUNT(*) FROM "victim" WHERE ("victim_immigrant" IS NOT NULL AND 
        "victim_immigrant" != 'No' AND "victim_immigrant" != 'Unknown') AND 
        "contact_date" BETWEEN $1 AND $2) as "victim_immigrant",
    (select COUNT(*) FROM "victim" WHERE ("victim_transgender" = 'yes' OR 
        "victim_gender" = 'transgender' OR "victim_sexual_orientation" = 'Gay' 
        OR "victim_sexual_orientation" = 'Lesbian') AND "contact_date" BETWEEN $1 AND $2) as "lgbtq",
    (select COUNT(*) FROM "victim" WHERE "veteran" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "veteran",
    (select COUNT(*) FROM "victim" WHERE ("disability_physical" = TRUE OR
        "disability_mental" = TRUE OR "disability_developmental" = TRUE OR 
        "disability_other" = TRUE) AND "contact_date" BETWEEN $1 AND $2) as "victims_with_disabilities",
    (select COUNT(*) FROM "victim" WHERE "limited_english" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "limited_english",
    (select COUNT(*) FROM "victim" WHERE ("emergency_financial" = TRUE OR "reparations_claims" = TRUE)
        AND "contact_date" BETWEEN $1 AND $2) as "assisted_with_victim_compensation", ` +
    
// COUNTS FOR - (A) Information & Referral: Total services provided during the reporting period
    `(select COUNT(*) FROM "victim" WHERE ("legal_court_advocacy" = TRUE OR 
        "information_criminal_justice" = TRUE OR "legal_law_enforcement_interview" = TRUE OR 
        "legal_prosecution_related" = TRUE) AND "contact_date" BETWEEN $1 AND $2) 
        as "info_criminal_justice_process",
    (select COUNT(*) FROM "victim" WHERE "contact_type" = 'in-person' AND 
        ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
        ("victim_prior_contact" = TRUE AND "victim_contact_prior_oct" = TRUE)) AND 
        "contact_date" BETWEEN $1 AND $2) as "info_victims_rights",
    (select COUNT(*) FROM "victim" WHERE "referral_agency" IS NOT NULL AND 
        "contact_date" BETWEEN $1 AND $2) as "referral_victim_support",
    (select COUNT(*) FROM "victim" WHERE "referral_other" IS NOT NULL AND 
        "contact_date" BETWEEN $1 AND $2) as "referral_other_services", ` +

// COUNTS FOR - (B) Personal Advocacy/Accompaniment: Total services provided during the reporting period
    `(select COUNT(*) FROM "victim" WHERE ("medical_accompaniment_medical" = TRUE OR 
        "medical_accompaniment_dental" = TRUE) AND "contact_date" BETWEEN $1 AND $2) 
        as "emergency_med_care",
    (select COUNT(*) FROM "victim" WHERE "medical_exam_support" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "forensic_exam",
    (select COUNT(*) FROM "victim" WHERE "legal_law_enforcement_interview" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "law_enforcement_interview",
    (select COUNT(*) FROM "victim" WHERE "legal_immigration" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "legal_immigration",
    (select COUNT(*) FROM "victim" WHERE "legal_intervention" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "legal_intervention",
    (select COUNT(*) FROM "victim" WHERE ("transportation_medical_exam_support" = TRUE OR 
        "transportation_medical_accompaniment_medical" = TRUE OR 	
        "transportation_medical_accompaniment_dental" =TRUE) AND 
        "contact_date" BETWEEN $1 AND $2) as "transportation", ` + 

// COUNTS FOR  - (C) Emotional Support of Safety Services: Total services provided during the reporting period
	`(select COUNT(*) FROM "victim" WHERE "contact_date" BETWEEN $1 AND $2) as "crisis_intervention",
    (select COUNT(*) FROM "victim" WHERE "contact_type" = 'phone' AND 
        "contact_date" BETWEEN $1 AND $2) as "hotline_intervention",
    (select COUNT(*) FROM "victim" WHERE "crisis_counseling_individual" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "crisis_counseling_individual",
    (select COUNT(*) FROM "victim" WHERE "crisis_counseling_group" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "crisis_counseling_group",
    (select COUNT(*) FROM "victim" WHERE "emergency_financial" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "emergency_financial", ` +

// COUNTS FOR - (E) Criminal/Civil Justice System Assistance: Total services provided during the reporting period
    `(select COUNT(*) FROM "victim" WHERE "legal_ofp_hro" = 'TRUE' AND 
        "contact_date" BETWEEN $1 AND $2) as "ofp_hro",
    (select COUNT(*) FROM "victim" WHERE "other_emergency_justice" = 'TRUE' AND 
        "contact_date" BETWEEN $1 AND $2) as "other_emergency_justice",
    (select COUNT(*) FROM "victim" WHERE "legal_immigration" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "legal_immigration", 
    (select COUNT(*) FROM "victim" WHERE "legal_prosecution_related" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "legal_prosecution_related",
    (select COUNT(*) FROM "victim" WHERE "legal_law_enforcement_interview" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "legal_law_enforcement_interview",
    (select COUNT(*) FROM "victim" WHERE "legal_court_advocacy" = TRUE AND 
        "contact_date" BETWEEN $1 AND $2) as "legal_court_advocacy", ` + 

// COUNTS FOR - Individuals who received services during the reporting period
    // (individual totals for sections A, B, C, and E)
	`(SELECT  COUNT(*) as "total_A_information_referral" FROM "victim" WHERE 
	("legal_court_advocacy" = TRUE  OR 	
		"information_criminal_justice" = TRUE OR 
		"legal_law_enforcement_interview" = TRUE OR 
		"legal_prosecution_related" = TRUE OR 	
		"referral_agency" IS NOT NULL OR 
		"referral_other" IS NOT NULL)
	AND "contact_date" BETWEEN 	$1 AND $2),		
		
	(SELECT  COUNT(*) as "total_B_personal_advocacy_accompaniment" FROM "victim" WHERE 
	(("medical_accompaniment_medical" = TRUE OR 
		"medical_accompaniment_dental" = TRUE) OR 	
		"medical_exam_support" = TRUE OR 
		"legal_law_enforcement_interview" = TRUE OR 
		"legal_immigration" = TRUE OR 
		"legal_intervention" = TRUE OR 
		("transportation_medical_exam_support" = TRUE OR 
			"transportation_medical_accompaniment_medical" = TRUE OR
			"transportation_medical_accompaniment_dental" =TRUE))
	AND ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
	    ("victim_prior_contact" = TRUE AND "victim_contact_prior_oct" = TRUE))
	AND "contact_date" BETWEEN 	$1 AND $2), 

    (SELECT  COUNT(*) as "total_C_Emotional_support_safety_service" FROM "victim" WHERE 
	("contact_type" = 'phone' OR
	    "contact_type" = 'in-person' OR
	    "crisis_counseling_individual" = TRUE OR
	    "crisis_counseling_group" = TRUE OR	
	    "emergency_financial" = TRUE)
	AND ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
	    ("victim_prior_contact" = TRUE AND "victim_contact_prior_oct" = TRUE))
	AND "contact_date" BETWEEN 	$1 AND $2),	

    (SELECT  COUNT(*) as "total_E_criminal_civil_justice_system" FROM "victim" WHERE 
	("legal_ofp_hro" = 'TRUE' OR
        "other_emergency_justice" = 'TRUE' OR
        "legal_immigration" = TRUE OR
        "legal_prosecution_related" = TRUE OR	
        "legal_law_enforcement_interview" = TRUE OR
        "legal_court_advocacy" = TRUE)
	AND ("victim_prior_contact" = FALSE OR "victim_prior_contact" is NULL OR 
        ("victim_prior_contact" = TRUE AND "victim_contact_prior_oct" = TRUE))
	AND "contact_date" BETWEEN 	$1 AND $2);	`
;

module.exports = fedQueryText;