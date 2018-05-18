const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const postQueryText = require('../modules/post.query');


//Post victim to db
router.post('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log("in router put req.body, ", req.body);
        const { date_entered, advocate_name, contact_date, start_time, end_time, service_location, 
                service_county, in_person_client_number, victim_zipcode, victim_type, victim_referral_source, 
                victim_prior_contact, victim_contact_prior_oct, crisis_counseling_individual, crisis_counseling_group,
	            legal_law_enforcement_interview, legal_prosecution_related, legal_court_advocacy, legal_ofp_hro,legal_immigration,
	            legal_intervention, medical_exam_support, transportation_medical_exam_support, medical_accompaniment_medical,
	            transportation_medical_accompaniment_medical, medical_accompaniment_dental, transportation_medical_accompaniment_dental,
	            crisis_counseling,information_referral, information_criminal_justice, other_emergency_justice, safe_at_home, emergency_financial,
	            reparations_claims,in_person_services_received_prior_oct, unmet_need_financial, unmet_need_shelter_housing,
	            unmet_need_other, unmet_need_staying_where, unmet_other_descr,referral_svc, referral_agency, referral_other,
                supported_on_call, violence_adult_sexual, violence_adult_when_child_by_family, violence_adult_when_child_by_other,
                violence_bullying, violence_child_pornography, violence_domestic, violence_elder, violence_exposing,
                violence_internet, violence_minor_by_family, violence_minor_by_other, violence_phone, violence_exploitation_trafficking,
                violence_harassment, violence_stalking, violence_teen_dating, violence_other, violence_other_specify, violence_unknown,
                victim_multiple_types_violence, police_report_filed, victim_age, victim_gender, victim_transgender,
                victim_sexual_orientation, victim_gender_pronouns, disability_blind, disability_physical, disability_mental,
                disability_deaf, disability_developmental, disability_other, disability_other_specify, disability_unknown,
                disability_none, victim_ethnicity, victim_ethnicity_other_specify, victim_immigrant,
                victim_immigrant_other_specify, homeless, limited_english, veteran,
                victim_number, contact_type, form_number
            } = req.body

        pool.query(postQueryText, [
          date_entered,
          advocate_name,
          contact_date,
          start_time,
          end_time,
          service_location,
          service_county,
          in_person_client_number,
          victim_zipcode,
          victim_type,
          victim_referral_source,
          victim_prior_contact,
          victim_contact_prior_oct,
          crisis_counseling_individual,
          crisis_counseling_group,
          legal_law_enforcement_interview,
          legal_prosecution_related,
          legal_court_advocacy,
          legal_ofp_hro,
          legal_immigration,
          legal_intervention,
          medical_exam_support,
          transportation_medical_exam_support,
          medical_accompaniment_medical,
          transportation_medical_accompaniment_medical,
          medical_accompaniment_dental,
          transportation_medical_accompaniment_dental,
          crisis_counseling,
          information_referral,
          information_criminal_justice,
          other_emergency_justice,
          safe_at_home,
          emergency_financial,
          reparations_claims,
          in_person_services_received_prior_oct,
          unmet_need_financial,
          unmet_need_shelter_housing,
          unmet_need_other,
          unmet_need_staying_where,
          unmet_other_descr,
          referral_svc,
          referral_agency,
          referral_other,
          supported_on_call,
          violence_adult_sexual,
          violence_adult_when_child_by_family,
          violence_adult_when_child_by_other,
          violence_bullying,
          violence_child_pornography,
          violence_domestic,
          violence_elder,
          violence_exposing,
          violence_internet,
          violence_minor_by_family,
          violence_minor_by_other,
          violence_phone,
          violence_exploitation_trafficking,
          violence_harassment,
          violence_stalking,
          violence_teen_dating,
          violence_other,
          violence_other_specify,
          violence_unknown,
          victim_multiple_types_violence,
          police_report_filed,
          victim_age,
          victim_gender,
          victim_transgender,
          victim_sexual_orientation,
          victim_gender_pronouns,
          disability_blind,
          disability_physical,
          disability_mental,
          disability_deaf,
          disability_developmental,
          disability_other,
          disability_other_specify,
          disability_unknown,
          disability_none,
          victim_ethnicity,
          victim_ethnicity_other_specify,
          victim_immigrant,
          victim_immigrant_other_specify,
          homeless,
          limited_english,
          veteran,
          victim_number,
          contact_type,
          form_number
        ])
        .then((result)=>{
            res.send(result.rows[0])
        })
        .catch((error)=>{
            res.sendStatus(500)
        })

    } else {
        res.sendStatus(403);
    }
});

//Put route for victim 
// TODO change so only admin can change a form
router.put('/:id', (req, res)=>{
    //will want to change this so only the admin can update a form
    if(req.isAuthenticated()){



        //pool.query goes here
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
})

//Delete route for a victim form
// TODO  change so only an admin can delete a form
router.delete('/:id', (req, res)=>{
    if(req.isAuthenticated()){
        //pool.query goes here
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
})

module.exports = router;