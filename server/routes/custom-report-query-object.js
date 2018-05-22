let object = {
    victim_ethnicity_asian: ` "victim_ethnicity" = 'Asian' AND "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    NativeAmerican: ` "victim_ethnicity" = 'Native American' AND "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    ChicanoLatino: ` "victim_ethnicity" = 'Chican@/Latin@' AND "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    AfricanAmericanBlack: ` "victim_ethnicity" = 'African American/Black' AND "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    NativeHawaiianPacificIslander: ` "victim_ethnicity" = 'Native Hawaiian/Pacific Islander' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    WhiteNonLatinoCaucasian: ` "victim_ethnicity" = 'White non-Latino/Caucasian' AND "contact_date" BETWEEN '2017-10-01' AND '2018-05-20') `,
    Other: ` "victim_ethnicity" = 'Other' AND "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    MultiRacial: ` "victim_ethnicity" = 'Multi-racial' AND "contact_date" BETWEEN  '2017-10-01' AND '2018-05-20') `,
    unknown: `"victim_ethnicity" = 'unknown' OR "victim_ethnicity" IS NULL)  AND "contact_date" BETWEEN $1 AND $2)`,
}