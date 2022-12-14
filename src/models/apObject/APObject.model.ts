import {APBase} from "../apBase/APBase.model";
import { APObjectFields } from "./APObject.types";
import {ASModelType} from "../../common/types";

/**
 * Describes an object of any kind. The Object type serves as the base type for most of
 * the other kinds of objects defined in the Activity Vocabulary,
 * including other Core types such as Activity, intransitiveActivity, Collection and OrderedCollection.
 *
 * {@link https://www.w3.org/ns/activitystreams#Object Docs}
 */
export class APObject extends APBase<APObjectFields>{
    static create(fields: APObjectFields) {
        return APBase._create<APObjectFields>({
            type: ASModelType.Object,
            ...fields,
        });
    }
}