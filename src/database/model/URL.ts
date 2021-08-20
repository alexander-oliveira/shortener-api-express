import { getModelForClass, prop } from '@typegoose/typegoose'

export class URL {
    @prop({ require: true})
    hash: string

    @prop({ require: true})
    originURL: string

    @prop({ require: true})
    shortURL: string
}

export const URLModel = getModelForClass(URL)