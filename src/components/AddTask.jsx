import {useState} from 'react'
import {motion} from 'framer-motion'


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [errorEmpty, setErrorEmpty] = useState(false)

    const onSubmit = e => {
        e.preventDefault()

        if(!text || !day){
            //alert('من فضلك املأ الخانات أولاً')
            return setErrorEmpty(true)
        }
        setErrorEmpty(false)
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-from" onSubmit={onSubmit}>
            {errorEmpty ? <motion.div animate={{ opacity: [0, 1, 0, 1] }} transition={{ duration: 0.5 }} className="form-error-empty">برجاء ملأ خانتي المهمة والوقت</motion.div> : ''}
            <div className="form-control">
                <label>مهمة جديدة</label>
                <input type="text" placeholder="إضافة مهمة" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>الوقت والتاريخ</label>
                <input type="datetime-local" placeholder="إضافة الوقت" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>تفعيل المنبه</label>
                <input style={{marginLeft: "105px"}} type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="حفظ" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
