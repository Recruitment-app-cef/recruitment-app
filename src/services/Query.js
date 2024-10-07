class Query {

    #chain = ""
    #socialService = "Por%20horas%20sociales"

    //constructor para cuando vienen todos los parámetros
    constructor(booking, cycle, state, signature = '', options = []) {
        this.booking = booking
        this.cycle = cycle
        this.state = state
        this.signature = signature
        this.options = options
    }

    getQuery() {

        let semester = this.cycle.split(' ').join("%20")
        let materia = this.signature.split(' ').join("%20")

        if (this.state != '') {
            switch (this.state) {
                case "Aceptados y/o confirmados": {
                    if (this.signature != '') {
                        switch (this.options.length) {
                            case 1: {
                                if (this.options[0] == "first") {
                                    if (this.booking != '') {
                                        switch (this.booking) {
                                            case "Remunerado": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true&signature=${materia}&firstOption=first`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=true&signature=${materia}&firstOption=first`
                                                }
                                            }
                                            case "Ambas": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true&signature=${materia}&firstOption=first`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=true&signature=${materia}&firstOption=first`
                                                }
                                            }
                                            case "Por Servicio Social": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=true&signature=${materia}&firstOption=first`
                                                } else {
                                                    return this.#chain = `booking=${this.#socialService}&state=true&signature=${materia}&firstOption=first`
                                                }
                                            }
                                            default: {
                                                break
                                            }
                                        }
                                    } else if (this.cycle != '') {
                                        return this.#chain = `cycle=${semester}&signature=${materia}&firstOption=first`
                                    } else {
                                        return this.#chain = `state=true&signature=${materia}&firstOption=${this.options[0]}`
                                    }
                                } else if (this.options[0] == "second") {
                                    if (this.booking != '') {
                                        switch (this.booking) {
                                            case "Remunerado": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true&signature=${materia}&secondOption=${this.options[0]}`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=true&signature=${materia}&secondOption=${this.options[0]}`
                                                }
                                            }
                                            case "Ambas": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true&signature=${materia}&secondOption=${this.options[0]}`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=true&signature=${materia}&secondOption=${this.options[0]}`
                                                }
                                            }
                                            case "Por Servicio Social": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=true&signature=${materia}&secondOption=${this.options[0]}`
                                                } else {
                                                    return this.#chain = `booking=${this.#socialService}&state=true&signature=${materia}&secondOption=${this.options[0]}`
                                                }
                                            }
                                            default: {
                                                break
                                            }
                                        }
                                    } else if (this.cycle != '') {
                                        return this.#chain = `cycle=${semester}&signature=${materia}&secondOption=${this.options[0]}`
                                    } else {
                                        return this.#chain = `state=true&signature=${materia}&secondOption=${this.options[0]}`
                                    }
                                }
                            }
                            case 2: {
                                if (this.booking != '') {
                                    switch (this.booking) {
                                        case "Remunerado": {
                                            if (this.cycle != '') {
                                                return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            } else {
                                                return this.#chain = `booking=${this.booking}&state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            }
                                        }
                                        case "Ambas": {
                                            if (this.cycle != '') {
                                                return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            } else {
                                                return this.#chain = `booking=${this.booking}&state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            }
                                        }
                                        case "Por Servicio Social": {
                                            if (this.cycle != '') {
                                                return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            } else {
                                                return this.#chain = `booking=${this.#socialService}&state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            }
                                        }
                                        default: {
                                            break
                                        }
                                    }
                                } else if (this.cycle != '') {
                                    return this.#chain = `cycle=${semester}&state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                } else {
                                    return this.#chain = `state=true&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                }
                            }
                            default: {
                                break;
                            }
                        }
                    } else if (this.booking != '') {
                        switch (this.booking) {
                            case "Remunerado": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true`
                                } else {
                                    return this.#chain = `booking=${this.booking}&state=true`
                                }
                            }
                            case "Ambas": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=true`
                                } else {
                                    return this.#chain = `booking=${this.booking}&state=true`
                                }
                            }
                            case "Por Servicio Social": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=true`
                                } else {
                                    return this.#chain = `booking=${this.#socialService}&state=true`
                                }
                            }
                            default: {
                                break
                            }
                        }
                    } else if (this.cycle != '') {
                        return this.#chain = `cycle=${semester}&state=true`
                    } else {
                        return this.#chain = `state=true`
                    }
                }
                case "No aceptados": {
                    if (this.signature != '') {
                        switch (this.options.length) {
                            case 1: {
                                if (this.options[0] == "first") {
                                    if (this.booking != '') {
                                        switch (this.booking) {
                                            case "Remunerado": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false&signature=${materia}&firstOption=first`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=false&signature=${materia}&firstOption=first`
                                                }
                                            }
                                            case "Ambas": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false&signature=${materia}&firstOption=first`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=false&signature=${materia}&firstOption=first`
                                                }
                                            }
                                            case "Por Servicio Social": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=false&signature=${materia}&firstOption=first`
                                                } else {
                                                    return this.#chain = `booking=${this.#socialService}&state=false&signature=${materia}&firstOption=first`
                                                }
                                            }
                                            default: {
                                                break
                                            }
                                        }
                                    } else if (this.cycle != '') {
                                        return this.#chain = `cycle=${semester}&signature=${materia}&firstOption=first`
                                    } else {
                                        return this.#chain = `state=false&signature=${materia}&firstOption=${this.options[0]}`
                                    }
                                } else if (this.options[0] == "second") {
                                    if (this.booking != '') {
                                        switch (this.booking) {
                                            case "Remunerado": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false&signature=${materia}&secondOption=${this.options[0]}`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=false&signature=${materia}&secondOption=${this.options[0]}`
                                                }
                                            }
                                            case "Ambas": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false&signature=${materia}&secondOption=${this.options[0]}`
                                                } else {
                                                    return this.#chain = `booking=${this.booking}&state=false&signature=${materia}&secondOption=${this.options[0]}`
                                                }
                                            }
                                            case "Por Servicio Social": {
                                                if (this.cycle != '') {
                                                    return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=false&signature=${materia}&secondOption=${this.options[0]}`
                                                } else {
                                                    return this.#chain = `booking=${this.#socialService}&state=false&signature=${materia}&secondOption=${this.options[0]}`
                                                }
                                            }
                                            default: {
                                                break
                                            }
                                        }
                                    } else if (this.cycle != '') {
                                        return this.#chain = `cycle=${semester}&signature=${materia}&secondOption=${this.options[0]}`
                                    } else {
                                        return this.#chain = `state=false&signature=${materia}&secondOption=${this.options[0]}`
                                    }
                                }
                            }
                            case 2: {
                                if (this.booking != '') {
                                    switch (this.booking) {
                                        case "Remunerado": {
                                            if (this.cycle != '') {
                                                return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            } else {
                                                return this.#chain = `booking=${this.booking}&state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            }
                                        }
                                        case "Ambas": {
                                            if (this.cycle != '') {
                                                return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            } else {
                                                return this.#chain = `booking=${this.booking}&state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            }
                                        }
                                        case "Por Servicio Social": {
                                            if (this.cycle != '') {
                                                return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            } else {
                                                return this.#chain = `booking=${this.#socialService}&state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                            }
                                        }
                                        default: {
                                            break
                                        }
                                    }
                                } else if (this.cycle != '') {
                                    return this.#chain = `cycle=${semester}&state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                } else {
                                    return this.#chain = `state=false&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                }
                            }
                            default: {
                                break;
                            }
                        }
                    } else if (this.booking != '') {
                        switch (this.booking) {
                            case "Remunerado": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false`
                                } else {
                                    return this.#chain = `booking=${this.booking}&state=false`
                                }
                            }
                            case "Ambas": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&state=false`
                                } else {
                                    return this.#chain = `booking=${this.booking}&state=false`
                                }
                            }
                            case "Por Servicio Social": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.#socialService}&cycle=${semester}&state=false`
                                } else {
                                    return this.#chain = `booking=${this.#socialService}&state=false`
                                }
                            }
                            default: {
                                break
                            }
                        }
                    } else if (this.cycle != '') {
                        return this.#chain = `cycle=${semester}&state=false`
                    } else {
                        return this.#chain = `state=false`
                    }
                }
                default: {
                    break
                }
            }
        } else if (this.signature != '') {
            switch (this.options.length) {
                case 1: {
                    if (this.options[0] == "first") {
                        if (this.booking != '') {
                            switch (this.booking) {
                                case "Remunerado": {
                                    if (this.cycle != '') {
                                        return this.#chain = `booking=${this.booking}&cycle=${semester}&signature=${materia}&firstOption=first`
                                    } else {
                                        return this.#chain = `booking=${this.booking}&signature=${materia}&firstOption=first`
                                    }
                                }
                                case "Ambas": {
                                    if (this.cycle != '') {
                                        return this.#chain = `booking=${this.booking}&cycle=${semester}&signature=${materia}&firstOption=first`
                                    } else {
                                        return this.#chain = `booking=${this.booking}&signature=${materia}&firstOption=first`
                                    }
                                }
                                case "Por Servicio Social": {
                                    if (this.cycle != '') {
                                        return this.#chain = `booking=${this.#socialService}&cycle=${semester}&signature=${materia}&firstOption=first`
                                    } else {
                                        return this.#chain = `booking=${this.#socialService}&signature=${materia}&firstOption=first`
                                    }
                                }
                                default: {
                                    break
                                }
                            }
                        } else if (this.cycle != '') {
                            return this.#chain = `cycle=${semester}&signature=${materia}&firstOption=first`
                        } else {
                            return this.#chain = `signature=${materia}&firstOption=${this.options[0]}`
                        }
                    } else if (this.options[0] == "second") {
                        if (this.booking != '') {
                            switch (this.booking) {
                                case "Remunerado": {
                                    if (this.cycle != '') {
                                        return this.#chain = `booking=${this.booking}&cycle=${semester}&signature=${materia}&secondOption=${this.options[0]}`
                                    } else {
                                        return this.#chain = `booking=${this.booking}&signature=${materia}&secondOption=${this.options[0]}`
                                    }
                                }
                                case "Ambas": {
                                    if (this.cycle != '') {
                                        return this.#chain = `booking=${this.booking}&cycle=${semester}&signature=${materia}&secondOption=${this.options[0]}`
                                    } else {
                                        return this.#chain = `booking=${this.booking}&signature=${materia}&secondOption=${this.options[0]}`
                                    }
                                }
                                case "Por Servicio Social": {
                                    if (this.cycle != '') {
                                        return this.#chain = `booking=${this.#socialService}&cycle=${semester}&signature=${materia}&secondOption=${this.options[0]}`
                                    } else {
                                        return this.#chain = `booking=${this.#socialService}&signature=${materia}&secondOption=${this.options[0]}`
                                    }
                                }
                                default: {
                                    break
                                }
                            }
                        } else if (this.cycle != '') {
                            return this.#chain = `cycle=${semester}&signature=${materia}&secondOption=${this.options[0]}`
                        } else {
                            return this.#chain = `signature=${materia}&secondOption=${this.options[0]}`
                        }
                    }
                }
                case 2: {
                    if (this.booking != '') {
                        switch (this.booking) {
                            case "Remunerado": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                } else {
                                    return this.#chain = `booking=${this.booking}&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                }
                            }
                            case "Ambas": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.booking}&cycle=${semester}&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                } else {
                                    return this.#chain = `booking=${this.booking}&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                }
                            }
                            case "Por Servicio Social": {
                                if (this.cycle != '') {
                                    return this.#chain = `booking=${this.#socialService}&cycle=${semester}&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                } else {
                                    return this.#chain = `booking=${this.#socialService}&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                                }
                            }
                            default: {
                                break
                            }
                        }
                    } else if (this.cycle != '') {
                        return this.#chain = `cycle=${semester}&signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                    } else {
                        return this.#chain = `signature=${materia}&firstOption=${this.options[0]}&secondOption=${this.options[1]}`
                    }
                }
                default: {
                    break;
                }
            }
        } else if (this.booking != '') {
            switch (this.booking) {
                case "Remunerado": {
                    if (this.cycle != '') {
                        return this.#chain = `booking=${this.booking}&cycle=${semester}`
                    } else {
                        return this.#chain = `booking=${this.booking}`
                    }
                }
                case "Ambas": {
                    if (this.cycle != '') {
                        return this.#chain = `booking=${this.booking}&cycle=${semester}`
                    } else {
                        return this.#chain = `booking=${this.booking}`
                    }
                }
                case "Por Servicio Social": {
                    if (this.cycle != '') {
                        return this.#chain = `booking=${this.#socialService}&cycle=${semester}`
                    } else {
                        return this.#chain = `booking=${this.#socialService}`
                    }
                }
                default: {
                    break
                }
            }
        } else if (this.cycle != '') {
            return this.#chain = `cycle=${semester}`
        } else {
            return this.#chain
        }
    }

}

export default Query