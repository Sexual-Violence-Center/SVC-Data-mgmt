const queryText = `SELECT 
	(select count(*) FROM "victim" WHERE  "service_county" = $1 AND "contact_date" BETWEEN $2 AND $3) as total_clients_served,  
	
 	(select COUNT( * ) FROM "victim" WHERE ("victim_prior_contact" = FALSE 
	    OR "victim_prior_contact" is NULL OR("victim_prior_contact" = TRUE AND 
	    "victim_contact_prior_oct" = TRUE))
        AND "service_county" = $1
        AND "contact_date" BETWEEN $2 AND $3) as "new_victim",
     (SELECT COUNT(*) FROM "victim" WHERE ("victim_prior_contact" = FALSE 
	    OR "victim_prior_contact" is NULL OR("victim_prior_contact" = TRUE AND 
	    "victim_contact_prior_oct" = TRUE))  AND "crisis_counseling_individual" = true AND "service_county" = $1 AND "contact_date" BETWEEN $2 AND $3) as total_clients_individual_counseling,
     (SELECT COUNT(*) FROM "victim" WHERE ("victim_prior_contact" = FALSE 
	    OR "victim_prior_contact" is NULL OR("victim_prior_contact" = TRUE AND 
			"victim_contact_prior_oct" = TRUE))  AND "crisis_counseling_group" = true AND "service_county" = $1 AND "contact_date" BETWEEN $2 AND $3) as total_clients_group_counseling,
			
	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_type" = 'adultPrimaryVictim' AND "contact_date" BETWEEN  $2 AND $3) as "adult_primary_victim",
	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_type" = 'adultSecondaryVictim' AND "contact_date" BETWEEN $2 AND $3) as "adult_secondary_victim",
	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_type" = 'youthPrimaryVictim' AND "contact_date"   BETWEEN $2 AND $3) as "youth_primary_victim",
	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_type" = 'youthSecondaryVictim' AND "contact_date"  BETWEEN $2 AND $3) as "youth_secondary_victim",
     
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = '212 Medical Center' AND "contact_date" BETWEEN  $2 AND $3) as "location_212",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Abbott Northwestern Hospital' AND "contact_date" BETWEEN  $2 AND $3) as "location_ANW",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Belle Plaine High School' AND "contact_date" BETWEEN  $2 AND $3) as "location_BPHS",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Fairview Southdale Hospital' AND "contact_date" BETWEEN  $2 AND $3) as "location_Fairview",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Hennepin County Jail' AND "contact_date" BETWEEN  $2 AND $3) as "location_HCJail",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'HCMC' AND "contact_date" BETWEEN  $2 AND $3) as "location_HCMC",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'House of Charity' AND "contact_date" BETWEEN  $2 AND $3) as "location_House_Charity",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Maple Grove Hospital' AND "contact_date" BETWEEN  $2 AND $3) as "location_Maple_Grove_Hospital",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Methodist Hospital' AND "contact_date" BETWEEN  $2 AND $3) as "location_Methodist",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'New Prague High School' AND "contact_date" BETWEEN  $2 AND $3) as "location_New_PragueHS",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'PEASE' AND "contact_date" BETWEEN  $2 AND $3) as "location_PEASE",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Plymouth' AND "contact_date" BETWEEN  $2 AND $3) as "location_Plymouth",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Richfield Health Services' AND "contact_date" BETWEEN  $2 AND $3) as "location_Richfield_Health_Services",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Scott County Jail' AND "contact_date" BETWEEN  $2 AND $3) as "location_SCJail",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Sexual Violence Center' AND "contact_date" BETWEEN  $2 AND $3) as "location_SVC",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Shakopee' AND "contact_date" BETWEEN  $2 AND $3) as "location_Shakopee",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'Shakopee Correctional Facility' AND "contact_date" BETWEEN  $2 AND $3) as "location_Shakopee_Correctional_Facility",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" = 'St. Francis Hospital' AND "contact_date" BETWEEN  $2 AND $3) as "location_St_Francis",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "service_location" IS NULL AND "contact_date" BETWEEN  $2 AND $3) as "location_unknown",
   	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND (
		   "service_location" != '212 Medical Center' AND
		   "service_location" != 'Abbott Northwestern Hospital' AND
		   "service_location" != 'Belle Plaine High School' AND
		   "service_location" != 'Fairview Southdale Hospital' AND
		   "service_location" != 'Hennepin County Jail' AND
		   "service_location" != 'HCMC' AND
		   "service_location" != 'House of Charity' AND
		   "service_location" != 'Maple Grove Hospital' AND
		   "service_location" != 'Methodist Hospital' AND
		   "service_location" != 'New Prague High School' AND
		   "service_location" != 'PEASE' AND
		   "service_location" != 'Plymouth' AND
		   "service_location" != 'Richfield Health Services' AND
		   "service_location" != 'Scott County Jail' AND
		   "service_location" != 'Sexual Violence Center' AND
		   "service_location" != 'Shakopee' AND
		   "service_location" != 'Shakopee Correctional Facility' AND
		   "service_location" != 'St. Francis Hospital')
			AND "contact_date" BETWEEN  $2 AND $3) as "location_other",

    (select count(*) from "victim" WHERE "service_county" = $1 AND "victim_age" BETWEEN 0 AND 18 AND "contact_date" BETWEEN $2 AND $3) as victim_age_zero_to_eightteen,
    (select count(*) from "victim" WHERE "service_county" = $1 AND "victim_age" BETWEEN 19 AND 50 AND "contact_date" BETWEEN $2 AND $3) as victim_age_nineteen_to_fifty,
    (select count(*) from "victim" WHERE "service_county" = $1 AND "victim_age" > 50 AND "contact_date" BETWEEN $2 AND $3) as victim_age_over_fifty,
    (select count(*) from "victim" WHERE "service_county" = $1 AND "victim_age" IS NULL AND "contact_date" BETWEEN $2 AND $3) as victim_age_unknown,
   
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'Asian' AND "contact_date" BETWEEN  $2 AND $3) as "victim_ethnicity_asian",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'Native American' AND "contact_date"    BETWEEN $2 AND $3) as "amerIndAlaskaNative",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'Chican@/Latin@' AND "contact_date"   BETWEEN $2 AND $3) as "hispanicOrLatino",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'African American/Black' AND "contact_date"        BETWEEN $2 AND $3) as "africanAmerican",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'Native Hawaiian/Pacific Islander' AND     "contact_date" BETWEEN $2 AND $3) as "pacificIslanderHawaiian",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'White Non-Latino/Caucasian' AND   "contact_date" BETWEEN    $2 AND $3) as "white",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'Other' AND   "contact_date" BETWEEN    $2 AND $3) as "other",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_ethnicity" = 'Multi-racial' AND  "contact_date"        BETWEEN '2016-05-05' AND $3) as "multiple_races",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND  "victim_ethnicity" IS NULL  AND    "contact_date"        BETWEEN '2016-05-05' AND $3) as "not_reported",
    (select COUNT("victim_ethnicity") FROM "victim"  WHERE "service_county" = $1  AND "contact_date"        BETWEEN $2 AND $3) as "total_ethnicity",
    (select count(*) FROM "victim" WHERE "service_county" = $1 AND "victim_gender" = 'Male' AND "contact_date" BETWEEN $2 AND $3 ) as victim_gender_male,
    (select count(*) FROM "victim" WHERE "service_county" = $1 AND "victim_gender" = 'Female' AND "contact_date" BETWEEN $2 AND $3 ) as victim_gender_female,
    (select count(*) FROM "victim" WHERE "service_county" = $1 AND "victim_transgender" = 'TRUE' AND "contact_date" BETWEEN $2 AND $3 ) as victim_gender_transgender,
    (select count(*) FROM "victim" WHERE "service_county" = $1 AND "victim_gender" IS NULL AND "contact_date" BETWEEN $2 AND $3 ) as victim_gender_unknown,
	
	
	(select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_adult_sexual" = TRUE AND "contact_date" BETWEEN    $2 AND $3) as "violence_adult_sexual",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_adult_when_child_by_family" = TRUE AND   "contact_date" BETWEEN    $2 AND $3) as "violence_adult_when_child_by_family",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_adult_when_child_by_other" = TRUE AND    "contact_date" BETWEEN    $2 AND $3) as "violence_adult_when_child_by_other",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND ("violence_adult_when_child_by_other" = TRUE OR    "violence_adult_when_child_by_family" = TRUE) AND "contact_date" BETWEEN $2 AND   $3) as "violence_adult_when_child_total",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_bullying" = TRUE AND "contact_date" BETWEEN    $2 AND $3) as "violence_bullying",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_child_pornography" = TRUE AND "contact_date"       BETWEEN $2 AND $3) as "violence_child_pornography",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_minor_by_family" = TRUE AND "contact_date" BETWEEN     $2 AND $3) as "violence_minor_by_family",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_minor_by_other" = TRUE AND "contact_date" BETWEEN  $2 AND $3) as "violence_minor_by_other",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND ("violence_minor_by_other" = TRUE OR   "violence_minor_by_family" = TRUE) AND "contact_date" BETWEEN $2 AND $3) as     "violence_minor_total",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_domestic" = TRUE AND "contact_date" BETWEEN    $2 AND $3) as "violence_domestic",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_elder" = TRUE AND "contact_date" BETWEEN   $2 AND $3) as "violence_elder",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_exploitation_trafficking" = TRUE AND "contact_date"    BETWEEN $2 AND $3) as "violence_exploitation_trafficking",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_exposing" = TRUE AND "contact_date" BETWEEN    $2 AND $3) as "violence_exposing",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_internet" = TRUE AND "contact_date" BETWEEN    $2 AND $3) as "violence_internet",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_phone" = TRUE AND "contact_date" BETWEEN   $2 AND $3) as "violence_phone",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_harassment" = TRUE AND "contact_date" BETWEEN  $2 AND $3) as "violence_harassment",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_stalking" = TRUE AND "contact_date" BETWEEN    $2 AND $3) as "violence_stalking",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND ("violence_stalking" = TRUE OR "violence_exposing" = TRUE OR     "violence_internet" = TRUE OR "violence_phone" OR "violence_harassment" = TRUE )AND "contact_date"  BETWEEN $2 AND $3) as "violence_stalking_harassment_total",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_teen_dating" = TRUE AND "contact_date" BETWEEN     $2 AND $3) as "violence_teen_dating",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_other" = TRUE AND "contact_date" BETWEEN   $2 AND $3) as "violence_other",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "violence_unknown" IS NULL AND "contact_date" BETWEEN     $2 AND $3) as "violence_unknown",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_multiple_types_violence" = TRUE AND "contact_date"  BETWEEN $2 AND $3) as "victim_multiple_types_violence",
    
    
    
  
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55111 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55111",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55305 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55305",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55311 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55311",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55316 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55316",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55317 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55317",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55327 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55327",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55328 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55328",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55331 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55331",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55340 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55340",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55341 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55341",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55343 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55343",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55344 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55344",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55345 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55345",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55346 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55346",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55347 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55347",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55356 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55356",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55357 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55357",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55359 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55359",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55361 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55361",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55364 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55364",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55369 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55369",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55373 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55373",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55374 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55374",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55375 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55375",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55384 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55384",  
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55387 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55387",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55388 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55388",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55391 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55391",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55392 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55392",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55401 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55401",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55402 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55402",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55403 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55403",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55404 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55404",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55405 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55405",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55406 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55406",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55407 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55407",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55408 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55408",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55409 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55409",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55410 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55410",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55411 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55411",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55412 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55412",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55413 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55413",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55414 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55414",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55415 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55415",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55416 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55416",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55417 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55417",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55418 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55418",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55419 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55419",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55420 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55420",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55422 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55422",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55423 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55423",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55424 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55424",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55425 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55425",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55426 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55426",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55427 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55427",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55428 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55428",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55429 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55429",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55430 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55430",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55431 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55431",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55435 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55435",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55436 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55436",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55437 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55437",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55438 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55438",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55439 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55439",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55441 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55441",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55442 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55442",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55443 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55443",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55444 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55444",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55445 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55445",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55446 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55446",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55447 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55447",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55450 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55450",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55454 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55454",
    (select COUNT(*) FROM "victim" WHERE "service_county" = $1 AND "victim_zipcode" = 55455 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_55455",
    
    (select Count(*) FROM "victim" WHERE "service_county" = $1 AND 
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
            "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_other",
            (select Count(*) FROM "victim" WHERE "service_county" = $1 AND (
    		"victim_zipcode" = 55111   OR 
    		"victim_zipcode" = 55305   OR
    		"victim_zipcode" = 55311   OR
    		"victim_zipcode" = 55116   OR 
    		"victim_zipcode" = 55317   OR
    		"victim_zipcode" = 55327   OR
    		"victim_zipcode" = 55328   OR 
    		"victim_zipcode" = 55331   OR
    		"victim_zipcode" = 55340   OR
    		"victim_zipcode" = 55341   OR 
    		"victim_zipcode" = 55343   OR
    		"victim_zipcode" = 55344   OR
    		"victim_zipcode" = 55345   OR 
    		"victim_zipcode" = 55346   OR
    		"victim_zipcode" = 55347   OR
    		"victim_zipcode" = 55356   OR 
    		"victim_zipcode" = 55357   OR
    		"victim_zipcode" = 55359   OR
    		"victim_zipcode" = 55361   OR 
    		"victim_zipcode" = 55364   OR
    		"victim_zipcode" = 55369   OR
    		"victim_zipcode" = 55373   OR 
    		"victim_zipcode" = 55374   OR
    		"victim_zipcode" = 55375   OR
    		"victim_zipcode" = 55384   OR 
    		"victim_zipcode" = 55387   OR
    		"victim_zipcode" = 55388   OR
    		"victim_zipcode" = 55391   OR 
    		"victim_zipcode" = 55392   OR
    		"victim_zipcode" = 55401   OR
    		"victim_zipcode" = 55402   OR 
    		"victim_zipcode" = 55403   OR
    		"victim_zipcode" = 55404   OR
    		"victim_zipcode" = 55405   OR 
    		"victim_zipcode" = 55406   OR
    		"victim_zipcode" = 55407   OR
    		"victim_zipcode" = 55408   OR 
    		"victim_zipcode" = 55409   OR
    		"victim_zipcode" = 55410   OR
    		"victim_zipcode" = 55411   OR 
    		"victim_zipcode" = 55412   OR
    		"victim_zipcode" = 55413   OR
    		"victim_zipcode" = 55414   OR 
    		"victim_zipcode" = 55415   OR
    		"victim_zipcode" = 55416   OR
    		"victim_zipcode" = 55417   OR 
    		"victim_zipcode" = 55418   OR
    		"victim_zipcode" = 55419   OR
    		"victim_zipcode" = 55420   OR 
    		"victim_zipcode" = 55422   OR
    		"victim_zipcode" = 55423   OR
    		"victim_zipcode" = 55424   OR 
    		"victim_zipcode" = 55425   OR
    		"victim_zipcode" = 55426   OR
    		"victim_zipcode" = 55427   OR 
    		"victim_zipcode" = 55428   OR
    		"victim_zipcode" = 55429   OR
    		"victim_zipcode" = 55430   OR 
    		"victim_zipcode" = 55431   OR
    		"victim_zipcode" = 55435   OR
    		"victim_zipcode" = 55436   OR 
    		"victim_zipcode" = 55437   OR
    		"victim_zipcode" = 55438   OR
    		"victim_zipcode" = 55439   OR 
    		"victim_zipcode" = 55441   OR
    		"victim_zipcode" = 55442   OR
    		"victim_zipcode" = 55443   OR 
    		"victim_zipcode" = 55444   OR
    		"victim_zipcode" = 55445   OR
    		"victim_zipcode" = 55446   OR 
    		"victim_zipcode" = 55447   OR
    		"victim_zipcode" = 55450   OR
    		"victim_zipcode" = 55454   OR 
    		"victim_zipcode" = 55455   		) AND
    		"contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_total",
   (SELECT COUNT(*) FROM "victim" WHERE "victim_zipcode" IS NULL AND "service_county" = $1 AND "contact_date"  BETWEEN $2 AND $3) as "victim_zipcode_unkown";`;

   module.exports = queryText;