import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phoneNumber: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div>
      <h2>Регистрация пользователя</h2>
      <form>
        <label>
          ФИО:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Возраст:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Электронная почта:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Номер телефона:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />

        <div>
          <h3>Введенные значения:</h3>
          <p>ФИО: {formData.fullName}</p>
          <p>Возраст: {formData.age}</p>
          <p>Электронная почта: {formData.email}</p>
          <p>Номер телефона: {formData.phoneNumber}</p>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm

