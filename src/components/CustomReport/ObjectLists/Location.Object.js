const IndividualsServicedObject = [
    { label: 'Total Individuals', value: "total_victims" },
    { label: 'New Individuals', value: "new_victim" }
]

export default IndividualsServicedObject

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