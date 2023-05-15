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
		"therapist_id": "",
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
		"therapist_id": "",
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
		"therapist_id": "",
		"status": "pending"
	}

]


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('cases')
  .del()
  .then(() => {
    return knex('cases').insert(mockdata);
  })

};