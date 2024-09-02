import { useState } from "react"


const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/api/createblog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
            } else {
                console.log('Error')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="create-blog-page">
            <div className="container">
                <h1>Create Blog</h1>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="title">Title : </label>
                        <input onChange={handleChange} type="text" id="title" name="title" />
                    </div>
                    <div>
                        <label htmlFor="description">Description : </label>
                        <input onChange={handleChange} type="text" id="description" name="description" />
                    </div>
                    <div>
                        <label htmlFor="content">Content : </label>
                        <textarea onChange={handleChange} id="content" name="content" />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </section>
    )
}

export default CreateBlog