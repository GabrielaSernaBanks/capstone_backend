/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const mockdata = [
  {
		"case_id": "18325",
		"school_name": "Cutler Bay Middle School",
		"school_address": "1230 Wayridge Center",
		"student_id": 76883643,
		"student_dob": "12/20/2017",
		"student_grade": 6,
		"date_posted": "4/18/2023",
		"type": "Language and Pragmatics",
		"therapist_id": "a",
		"status": "pending"
	},

	{
		"case_id": "88845",
		"school_name": "Cutler Bay Middle School",
		"school_address": "1230 Wayridge Center",
		"student_id": 103804307,
		"student_dob": "2/23/2020",
		"student_grade": 7,
		"date_posted": "4/9/2023",
		"type": "Language and Pragmatics ",
		"therapist_id": "a",
		"status": "pending"
	},

  {
		"case_id": "68790",
		"school_name": "Miami Palmetto Senior High School",
		"school_address": "128 Sage Trail",
		"student_id": 69380998,
		"student_dob": "12/10/2019",
		"student_grade": 12,
		"date_posted": "5/2/2023",
		"type": "Fluency",
		"therapist_id": "5d01c4d2-cfec-4f21-9c2f-e53abd0dd2b2",
		"status": "pending"
	},
	{
		"case_id": "88675",
		"school_name": "Miami Palmetto Senior High School",
		"school_address": "128 Sage Trail",
		"student_id": 51188787,
		"student_dob": "5/2/2017",
		"student_grade": 9,
		"date_posted": "5/6/2023",
		"type": "Articulation",
		"therapist_id": "a",
		"status": "pending"
	},
  {
		"case_id": "78965",
		"school_name": "Pinecrest Elementary School",
		"school_address": "5 Oakridge Avenue",
		"student_id": 33672431,
		"student_dob": "2/16/2018",
		"student_grade": 5,
		"date_posted": "4/20/2023",
		"type": "Speech Language and Pragmatics",
		"therapist_id": "5d01c4d2-cfec-4f21-9c2f-e53abd0dd2b2",
		"status": "pending"
	},
	{
		"case_id": "98765",
		"school_name": "Gulfstream Elementary School",
		"school_address": "990 Glacier Hill Junction",
		"student_id": 99627855,
		"student_dob": "4/3/2017",
		"student_grade": 5,
		"date_posted": "5/7/2023",
		"type": "Language  and Pragmatics",
		"therapist_id": "a",
		"status": "pending"
	},
	{
		"case_id": "34267",
		"school_name": "Florida City Elementary School",
		"school_address": "29 Melody Drive",
		"student_id": 69489302,
		"student_dob": "12/5/2016",
		"student_grade": 2,
		"date_posted": "4/30/2023",
		"type": "Fluency",
		"therapist_id": "a",
		"status": "pending"
	},
	{
		"case_id": "909867",
		"school_name": "Avocado Elementary School",
		"school_address": "6528 Lawn Drive",
		"student_id": 73725456,
		"student_dob": "1/7/2018",
		"student_grade": 1,
		"date_posted": "4/30/2023",
		"type": "Language and Pragmatics",
		"therapist_id": "5d01c4d2-cfec-4f21-9c2f-e53abd0dd2b2",
		"status": "pending"
	},
	{
		"case_id": "34657",
		"school_name": "Homestead Senior High School",
		"school_address": "7241 Anniversary Terrace",
		"student_id": 29793189,
		"student_dob": "12/23/2019",
		"student_grade": 9,
		"date_posted": "4/3/2023",
		"type": "Language and Pragmatics",
		"therapist_id": "5d01c4d2-cfec-4f21-9c2f-e53abd0dd2b2",
		"status": "pending"
	},
	{
		"case_id": "15487",
		"school_name": "Redland Middle School",
		"school_address": "4 Chinook Drive",
		"student_id": 88064926,
		"student_dob": "3/10/2019",
		"student_grade": 8,
		"date_posted": "4/24/2023",
		"type": "Speech Language and Pragmatics",
		"therapist_id": "a",
		"status": "pending"
	}

]


exports.seed = async function(knex) {
  return knex('cases')
  .del()
  .then(() => {
    return knex('cases').insert(mockdata);
  })

};