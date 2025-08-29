import mongoose from 'mongoose';

const PilotAstronautScheme = new mongoose.Schema({
    PilotCallSign:{
        type: String,
        required: true,
        trim: true,
    },
    DigitalCommunication:{
        type: String,
        required: true,
        trim: true,
    },
    Password:{
        type: String,
        required: true,
        trim: true
    },
    MissionDesignation:{
        type: String,
        trim: true,
    },
    PilotID:{
        type: Number,
        trim: true,
    },
    SpaceAgency:{
        type: String,
        trim: true,
    }
},{
    timestamps: true
}
);

export default mongoose.model('PilotAstronaut', PilotAstronautScheme);