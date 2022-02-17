// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}
const chassis = createChassis()
console.log(chassis)

//=========================================

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const chassisBody = addBody(chassis)
console.log(chassisBody)

//=========================================

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const chassisWheels = addWheels(chassisBody)
console.log(chassisWheels)

//==========================================

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

const chassisEngine = addEngine(chassisWheels)
console.log(chassisEngine)

//==========================================

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}

const chassisSteeringWheel = addSteeringWheel(chassisEngine)
console.log(chassisSteeringWheel)

//==========================================

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject
}

const chassisDriveTrain = addDriveTrain(chassisSteeringWheel)
console.log(chassisDriveTrain)

const createCar = () => {
    const chassis = createChassis()
    const chassisBody = addBody(chassis)
    const chassisWheels = addWheels(chassisBody)
    const chassisEngine = addEngine(chassisWheels)
    const chassisSteeringWheel = addSteeringWheel(chassisEngine)
    const chassisDriveTrain = addDriveTrain(chassisSteeringWheel)
    return chassisDriveTrain
}

const newCar = createCar()
console.log(newCar)



