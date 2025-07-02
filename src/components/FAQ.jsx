import Accordion from "./Accordion"

const FAQ = () => {
  return (
    <div className='p-4 mt-6 rounded-lg grid gap-6 md:grid-cols-2'>
      <div className="col grid gap-6">
        <Accordion 
      title='What are the school hours at Little Learners Academy?'
      answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
      />
      <Accordion 
      title='How do you handle food allergies and dietary restrictions?'
      answer='We take food allergies and dietary restrictions very seriously. We have a team of trained staff'
      />
      <Accordion 
      title='Is there a uniform policy for students?'
      answer='Yes, we have a uniform policy in place to ensure all students look and feel their'
      />
      <Accordion 
      title='What is the teacher-to-student ratio at Little Learners Academy?'
      answer='Our teacher-to-student ratio is 1:10, ensuring each child receives th'
      />
      </div>
      <div className="col grid gap-6">
        <Accordion 
      title='What extracurricular activities are available for students?'
      answer='We offer a variety of extracurricular activities, including sports, music, and'
      />
      <Accordion 
      title='How do you handle discipline and behavior management?'
      answer='We use a positive reinforcement approach to encourage good behavior and'
      />
      <Accordion 
      title='What extracurricular activities are available for students?'
      answer='We offer a variety of extracurricular activities, including sports, music, and'
      />
      <Accordion 
      title='How do I apply for admission to Little Learners Academy?'
      answer='To apply for admission, please visit our website and fill out the online application form.'
      />
      </div>
    </div>
  )
}

export default FAQ