import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("uz")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`https://json-api.uz/api/project/multi-languages/${lang}`)
      .then(res => {
        if (!res.ok) throw new Error("Server xatosi")
        return res.json()
      })
      .then(res => setData(res.data[0]))
      .catch(() => setError("Ma'lumot yuklanmadi ❌"))
      .finally(() => setLoading(false))
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, data, loading, error }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
