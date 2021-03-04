import {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className="add-from">
            <div className="form-control">
                <label>مهمة</label>
                <input type="text" placeholder="إضافة مهمة" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>الوقت والتاريخ</label>
                <input type="datetime-local" placeholder="إضافة الوقت" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>تفعيل المنبه</label>
                <input style={{marginLeft: "105px"}} type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="حفظ" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
