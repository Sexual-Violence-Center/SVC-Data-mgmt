// new contact = `(select COUNT( * ) FROM "victim" WHERE "victim_prior_contact" = FALSE 
//         OR "victim_prior_contact" is NULL OR("victim_prior_contact" = TRUE AND 
//         ("victim_contact_prior_oct" = FALSE OR "victim_contact_prior_oct" IS NULL)) 
//         AND "contact_date" BETWEEN $1 AND $2) as "new_victim" ;`

// AmericanIndianorAlaskanNative = "amerIndAlaskaNative";

// SELECT 
// 	(select COUNT(*) FROM "victim" WHERE "contact_date" BETWEEN $1 AND $2) as 		total_victims,
// 	(select COUNT( * ) FROM "victim"  WHERE "victim_prior_contact" = FALSE OR 	"victim_prior_contact" 	is NULL OR("victim_prior_contact" = TRUE AND ("victim_contact_prior_oct" = FALSE OR 	"victim_contact_prior_oct" IS NULL)) AND "contact_date" BETWEEN $1 AND $2) 		as "new_victim",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'Asian' AND "contact_date" BETWEEN 	$1 AND $2) as "victim_ethnicity_asian",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'amerIndAlaskaNative' AND "contact_date" 	BETWEEN $1 AND $2) as "amerIndAlaskaNative",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'hispanicOrLatino' AND "contact_date" 	BETWEEN $1 AND $2) as "hispanicOrLatino",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'africanAmerican' AND "contact_date" 		BETWEEN $1 AND $2) as "africanAmerican",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'pacificIslanderHawaiian' AND 	"contact_date" BETWEEN $1 AND $2) as "pacificIslanderHawaiian",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'white' AND 	"contact_date" BETWEEN 	$1 AND $2) as "white",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'other' AND 	"contact_date" BETWEEN 	$1 AND $2) as "other",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'multiple_races' AND 	"contact_date" 		BETWEEN $1 AND $2) as "multiple_races",
// 	(select COUNT(*) FROM "victim" WHERE "victim_ethnicity" = 'not_reported' AND 	"contact_date" 		BETWEEN $1 AND $2) as "not_reported",
// 	(select COUNT("victim_ethnicity") FROM "victim") as "total_ethnicity",