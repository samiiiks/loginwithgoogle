import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AutoSearch = () => {
    const [value, setValue] = useState([])

    const contryDetail = async () => {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2")
                .then((res) => {
                    setValue(res.data.data)
                })
            console.log(response.data)
        }
        catch {
            console.log();
        }
    }
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
        contryDetail()
    }, [])

    return (
        <div>
            {
                !!value && value.map((item, i) => {
                    return <p key={i}>{item.first_name}</p>
                })
            }
            <input type="text "name='name' placeholder='search...' onChange={(e) => onChangeHandler(e)}/>
        </div>
    )
}

export default AutoSearch
