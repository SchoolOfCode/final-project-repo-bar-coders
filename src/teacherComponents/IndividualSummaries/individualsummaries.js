import {useEffect, useState} from 'react'

function IndividualSummaries({studentSelected}) {
  
    const [summaries, setSummaries] = useState([])


  async function getIndividualSummaries(id) {
    const response = await fetch (`https://fourweekproject.herokuapp.com/teachers/student/summaries/${id}`)
    const data = await response.json()
    setSummaries(data.payload)

  }

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }


  useEffect(() => {
  getIndividualSummaries(studentSelected.id)
  }, [studentSelected])
  
  
    return (

    <div>
    {!studentSelected.isSelected && (<p>Select a student to see their individual summaries</p>)}
    {summaries && summaries.map((entry) => {return (<div>
    <h3>{formatDate(entry.date_created)}</h3>
    <p>{entry.title}, {entry.author}</p>
    <p>Pages Read: {entry.number_pages}, Minutes Read: {entry.minutes_read}</p>
    <p>Summary: {entry.summary}</p>
    </div>)}
    
    
    )}
    </div>

  )
}

export default IndividualSummaries