"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateAppointment({
    professional,
    specialty,
    appointmentDate,
    startTime,
    patientInfo
}) {
  const router = useRouter()

  const [patientName, setPatientName] = useState(`${patientInfo.name} ${patientInfo.last_name}`)
  const [patientRut, setPatientRut] = useState(patientInfo.id)
  const [patientMail, setPatientMail] = useState(patientInfo.email)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const created_at = new Date()
    const created_at_str = created_at.toDateString()

    const newAppointment = { 
      professional_rut: professional.id,
      patientRut: patientInfo.id,
      status: "active",
      appointment_datetime: `${appointmentDate}T${startTime}`,
      created_at: created_at_str
    }

    const res = await fetch('http://localhost:4000/appointment', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newAppointment)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/')
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <h1 className="text-center">Agendar Hora</h1>
      <label>
        <span>Profesional</span>
        <input
          required
          readOnly
          type="text"
          value={`${professional.name} ${professional.last_name}`}
        />
      </label>
      <label>
        <span>Especialidad</span>
        <input
          required
          readOnly
          type="text"
          value={`${specialty.name}`}
        />
      </label>
      <label>
        <span>Fecha</span>
        <input
          required
          type="text"
          readOnly
          value={appointmentDate}
        />
      </label>
      <label>
        <span>Hora</span>
        <input
          required
          readOnly
          type="time"
          value={startTime}
        />
      </label>
      <label>
        <span>Nombre Paciente</span>
        <input
          required
          type="text"
          onChange={(e) => setPatientName(e.target.value)}
          value={patientName}
        />
      </label>
      <label>
        <span>Rut Paciente</span>
        <input
          required
          type="text"
          onChange={(e) => setPatientRut(e.target.value)}
          value={patientRut}
          placeholder="11.111.111-1"
        />
      </label>
      <label>
        <span>Correo Paciente</span>
        <input
          required
          type="email"
          onChange={(e) => setPatientMail(e.target.value)}
          value={patientMail}
        />
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
        {isLoading && <span>Guardando...</span>}
        {!isLoading && <span>Agendar</span>}
        </button>
    </form>
  )
}
