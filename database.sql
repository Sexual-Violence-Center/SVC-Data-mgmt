CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    user_type BOOLEAN -- "admin" = true, "user" = false
);

CREATE TABLE victim (
	id SERIAL PRIMARY KEY,
--  SVC Advocacy Information
	date_entered DATE,
	advocate_name VARCHAR (255),
	contact_date DATE,
	
	start_time TIME,
	end_time TIME,
	
	service_location VARCHAR (255),
	service_county VARCHAR (255),
	in_person_client_number INTEGER,
	
--  Victim/Survivor Information
	victim_zipcode INTEGER,
	victim_type VARCHAR (255), -- drop down
	victim_referral_source VARCHAR (255),
	victim_prior_contact BOOLEAN,
	victim_contact_prior_oct BOOLEAN, --CHANGED FROM victim_prior_oct
	
--  In-Person Services Provided
	crisis_counseling_individual BOOLEAN,
	crisis_counseling_group BOOLEAN,
	legal_law_enforcement_interview BOOLEAN,
	legal_prosecution_related BOOLEAN,
	legal_court_advocacy BOOLEAN,
	legal_ofp_hro BOOLEAN,  
	legal_immigration BOOLEAN,
	legal_intervention BOOLEAN,
	
	medical_exam_support BOOLEAN,
	transportation_medical_exam_support BOOLEAN,
	medical_accompaniment_medical BOOLEAN,
	transportation_medical_accompaniment_medical BOOLEAN,
	medical_accompaniment_dental BOOLEAN,
	transportation_medical_accompaniment_dental BOOLEAN,
	
-- Other Services Provided
	crisis_counseling BOOLEAN,  
	information_referral BOOLEAN,
	information_criminal_justice BOOLEAN, 
	other_emergency_justice BOOLEAN,
	safe_at_home BOOLEAN,
	emergency_financial BOOLEAN,
	reparations_claims BOOLEAN,
	
	in_person_services_received_prior_oct BOOLEAN,
	
--  Unmet needs
	unmet_need_financial BOOLEAN,
	unmet_need_shelter_housing BOOLEAN,
	unmet_need_other BOOLEAN,  
	unmet_need_staying_where VARCHAR (255),
	unmet_other_descr VARCHAR (255),
	
-- Referral Services
	referral_svc VARCHAR (255),
	referral_agency VARCHAR (255),
	referral_other VARCHAR (255),
	
	supported_on_call VARCHAR (255), --drop down of yes, no, or unknown/hung up
	
	
--  Type of Sexual Violence
	violence_adult_sexual BOOLEAN, 
	
	violence_adult_when_child_by_family BOOLEAN, -- CHANGED FROM violence_adult_child_family
	violence_adult_when_child_by_other BOOLEAN, -- CHANGED FROM violence_adult_child_other
	
	violence_bullying BOOLEAN,
	violence_child_pornography BOOLEAN,
	violence_domestic BOOLEAN,
	violence_elder BOOLEAN,
	violence_exposing BOOLEAN,
	violence_internet BOOLEAN,
	
	violence_minor_by_family BOOLEAN, -- CHANGED FORM violence_minor_family
	violence_minor_by_other BOOLEAN, -- CHANGED FORM violence_minor_other
	
	violence_phone BOOLEAN,
	
	violence_exploitation_trafficking BOOLEAN,  -- CHANGED FROM violence_exploitation
	
	violence_harassment BOOLEAN,
	violence_stalking BOOLEAN,
	violence_teen_dating BOOLEAN,
	violence_other BOOLEAN,
	violence_other_specify VARCHAR (255),
	violence_unknown BOOLEAN,
	victim_multiple_types_violence BOOLEAN, -- CHANGED FROM victim_multiple
	
--  Police Report
 	police_report_filed BOOLEAN,

--  Demographic Survery
	victim_age INTEGER,
	victim_gender VARCHAR (255),
	victim_transgender VARCHAR (255), --drop down of yes, no, or unknown/pass
	victim_sexual_orientation VARCHAR (255),
	victim_gender_pronouns VARCHAR (255),
	
--	Disability Status
	disability_blind BOOLEAN,
	disability_physical BOOLEAN,
	disability_mental BOOLEAN,
	disability_deaf BOOLEAN,
	disability_developmental BOOLEAN,
	disability_other BOOLEAN,
	disability_other_specify VARCHAR (255),
	disability_unknown BOOLEAN,
	disability_none BOOLEAN,
	
--  Ethnic background. Will be a drop down
	victim_ethnicity VARCHAR (255),
	victim_ethnicity_other_specify VARCHAR (255),
	
--  Immigrant Status. Will be a drop down
	victim_immigrant VARCHAR (255),
	victim_immigrant_other_specify VARCHAR (255),
	
--  Other
	homeless BOOLEAN,
	limited_english BOOLEAN,
	veteran BOOLEAN,
	
	victim_number VARCHAR (255),
	contact_type VARCHAR (255),
	form_number INTEGER
	
);