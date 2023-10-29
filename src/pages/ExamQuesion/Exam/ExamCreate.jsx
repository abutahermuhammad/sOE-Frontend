import { useState } from "react";
import Select from 'react-select';

const options = [
  { value: 'Bangla', label: 'Bangla' },
  { value: 'English', label: 'English' },
  { value: 'GK', label: 'GK' },
];

const ExamCreate = () => {
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [selectTime, SetSelectTime] = useState(null)
  // time inputed state here
  const [timeInput, setTimeInput] = useState("00:00:00");
  const [mcq, setmcq] = useState(null);
  const [mTotal, setMTotal] = useState(null);
  // const [wmarks, setwmarks] = useState(null);
  const [inTotal, setinTotal] = useState(null);

  const handleTotalMcqMark = (e) => {
    const newMMark = e.target.value;
    const newMTotal = newMMark * mcq;
    setinTotal(newMTotal);
    setMTotal(newMTotal);
    recalculateTotal(newMTotal, allTotal);
  };
  
  const handleIntotalMarks = (e) => {
    const newAllTotal = parseInt(e.target.value);
    setinTotal(newAllTotal);
    recalculateTotal(mTotal, newAllTotal);
  };
  
  const recalculateTotal = (newMTotal, newAllTotal) => {
    // Recalculate the total based on newMTotal and newAllTotal
    const total = newMTotal + newAllTotal;
    setinTotal(total);
  };

  const handleTimeInputChange = (event) => {
    const value = event.target.value;
    setTimeInput(value);
        // Parse the input and update hours, minutes, and seconds
    const [h, m, s] = value.split(":").map(Number);
       const time = { h, m, s }
       SetSelectTime(time);
    
  }

  // ended
  const handleAddExam = event => {
    event.preventDefault();
   const form = event.target;
   const examName = form.examname.value;
   const examSub = selectedSubject.map(item => item.value);
   const mcqQsn = mcq;
   const mcqNumber = parseFloat(form.mcqmark.value);
   const McqMarkTotal = mTotal;
   const negativeMark = parseFloat(form.negative.value);
   const writtenmark = parseFloat(form.writtenmark.value);
   const inToalMark = inTotal;
   const examTime = selectTime;

const examData={examName,examSub,mcqQsn,mcqNumber,McqMarkTotal,negativeMark,writtenmark,inToalMark,examTime }
console.log(examData)
  }

  return (
    <div className="bg-white">
      <h1 className="text-center font-bold text-3xl p-10">Add Exam</h1>
      <div className="container mx-auto">
        <form onSubmit={handleAddExam}>
          {/* select exam */}
          <div className="flex gap-4 p-5">
            <div className="input-group">
              <select name="SelectSession" className="select select-bordered w-full">
                <option disabled selected>Select Session</option>
                <option>T-shirts</option>
                <option>Mugs</option>
              </select>

            </div>
            {/* <div className="input-group">
              <Select className='w-full'
                value={selectedSubject}
                onChange={setSelectedSubject}
                options={options}
                isMulti
                name='SelectedSubject'
              />

            </div> */}
          </div>

          {/* questin part */}
          <div className="flex mt-3 gap-4">
            <div className='w-full'>
              <label className="label">
                <span className="label-text font-bold">Exam Name</span>
              </label>
              <input type="text" placeholder="Exam Name" name="examname" className="input input-bordered w-full" />
            </div>
            <div className='w-full'>
              <label className="label">
                <span className="label-text  font-bold">Question Subject</span>
              </label>
              <div className="input-group">
              <Select className='w-full'
                value={selectedSubject}
                onChange={setSelectedSubject}
                options={options}
                isMulti
                name='SelectedSubject'
              />

            </div>
            </div>
          </div>
       
          <div className="mt-1">

            <div className="flex items-center gap-x-3 ">

              <div className="w-full">
                <label className="label">
                  <span className="label-text font-bold"> Total MCQ Question</span>
                </label>
                <input type="number" name="totalmcq" placeholder="Total MCQ"
                  value={mcq}
                  onChange={(event) => setmcq(parseInt(event.target.value))}
                  className="input input-bordered  w-full" />
              </div>
              {/*  */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text font-bold"> Per Question Mark </span>
                </label>
                <input type="number" name="mcqmark" placeholder="Mark"

                  onChange={handleTotalMcqMark}
                  className="input input-bordered  w-full" />
              </div>

            </div>


          </div>
          {/* 2 */}
          <div className="flex items-center gap-x-3 ">

            <div className="w-full">
              <label className="label">
                <span className="label-text font-bold"> (MCQ) Total Mark </span>
              </label>
              <input readOnly type="number" name="totalmcqmark"
                value={mTotal}
                placeholder="Total Mark" className="input input-bordered bg-slate-200  w-full" />
            </div>
            {/*  */}
            <div className="w-full">
              <label className="label">
                <span className="label-text font-bold"> (MCQ) Per question <span className="text-red-500">Negative</span> mark </span>
              </label>
              <input type="text" name="negative" placeholder="Negative Mark" className="input input-bordered  w-full" />
            </div>

          </div>
          {/* 3 */}
          <div className="flex items-center gap-x-3 ">

            <div className="w-full">
              <label className="label">
                <span className="label-text font-bold"> Written Mark</span>
              </label>
              <input type="number" name="writtenmark" placeholder="written"
              
              onChange={handleIntotalMarks}
              className="input input-bordered  w-full" />
            </div>
            {/*  */}
            <div className="w-full">
              <label className="label">
                <span className="label-text font-bold"> Total Marks </span>
              </label>
              <input readOnly type="number" name="totalmarks" 
              placeholder="In Total"
              value={inTotal}
               className="input input-bordered bg-slate-200  w-full" />
            </div>

          </div>
          {/* 4 */}


          <div className='w-full'>
            <label className="label">
              <span className="label-text font-bold"> Time (HH:MM:SS): </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={timeInput}
              onChange={handleTimeInputChange}
            />
            {/* <div className="flex item-center gap-5">
       <div>
        <strong>Hours:</strong> {hours}
      </div>
      <div>
        <strong>Minutes:</strong> {minutes}
      </div>
      <div>
        <strong>Seconds:</strong> {seconds}
      </div>
       </div>
    */}

          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ExamCreate;

