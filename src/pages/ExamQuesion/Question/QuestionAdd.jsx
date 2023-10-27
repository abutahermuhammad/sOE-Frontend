import { useState } from 'react';
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const QuestionAdd = () => {
  const [selectedSubject, setSelectedSubject] = useState([]);


  const handleAddQuestion = event => {
    event.preventDefault();
    const form = event.target;
    const question = form.question.value;
    const optionA = form.optionA.value;
    const optionB = form.optionB.value;
    const optionC = form.optionC.value;
    const optionD = form.optionD.value;
    const answer = form.answer.value;
    const note = form.note.value;
    const exam = form.SelectedExam.value;
    const subject = selectedSubject.map((subject) => subject.value);
    const questionData = { exam, subject, note, question, optionA, optionB, optionC, optionD, answer }
    console.log(questionData)



  }
  return (
    <div className='bg-[#8394e2]'>
      <h1 className="text-center text-2xl my-4 font-bold p-5 ">Add Your question</h1>
      <hr />
      <div className="container mx-auto">
        <form onSubmit={handleAddQuestion}>
          {/* select exam */}
          <div className="flex gap-4 p-5">
            <div className="input-group">
              <select name="SelectedExam" className="select select-bordered w-full">
                <option disabled selected>Select Exam</option>
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
          <div className="flex mt-3 d">
            <label className="label">
              <span className="label-text md:text-[20px] font-bold">Question Title</span>
            </label>
            <input type="text" placeholder="Question" name="question" className="input input-bordered w-full" />
            <label className="label">
              <span className="label-text md:text-[20px] font-bold">Question Subject</span>
              </label>
            <select name="SelectedExam" className="select select-bordered w-full">
              <option disabled selected>Select Subject</option>
              <option>T-shirts</option>
            </select>
          </div>
          {/* question */}
          <div className="mt-1">

            <div className="flex items-center gap-x-3 ">

              <label className="input-group">
                <span>A</span>
                <input type="text" name="optionA" placeholder="option" className="input input-bordered  w-full" />
              </label>

              <input className='' type="radio" name="answer" id="answer-1" value="A" />
            </div>


          </div>
          {/* 2 */}
          <div >

            <div className="flex items-center gap-x-3 ">
              <label className="input-group">
                <span>B</span>
                <input type="text" name="optionB" placeholder="option" className="input input-bordered  w-full" />
              </label>

              <input className='h-24' type="radio" name="answer" id="answer-2" value="B" />
            </div>


          </div>
          {/* 3 */}
          <div>


            <div className="flex items-center gap-x-3 ">
              <label className="input-group">
                <span>C</span>
                <input type="text" name="optionC" placeholder="option" className="input input-bordered  w-full" />
              </label>
              <input type="radio" name="answer" id="answer-3" value="C" />
            </div>


          </div>
          {/* 4 */}
          <div className="mb-1">


            <div className="flex items-center gap-x-3 ">
              <label className="input-group">
                <span>D</span>
                <input type="text" name="optionD" placeholder="option" className="input input-bordered w-full " />
              </label>

              <input className='h-24' type="radio" name="answer" id="answer-4" value="D" />
            </div>


          </div>
          <div>
            <input type="text" name="note" id="" placeholder="Note" className="input input-bordered w-full" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default QuestionAdd;
