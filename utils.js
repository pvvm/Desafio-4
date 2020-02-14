module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if(month < 0 || month == 0 && today.getDate() < birthDate())
            age -= 1

        return age
    },
    graduation: function(scholarity) {
        if(scholarity == "medio")
            return "Ensino Médio Completo"
        else if(scholarity == "superior")
            return "Ensino Superior Completo"
        else if(scholarity == "mestrado")
            return "Mestrado"
        else
            return "Doutorado"
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}