import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {RelationshipFields} from "./Relationship.types";

/**
 * Describes a relationship between two individuals. The subject and
 * object properties are used to identify the connected individuals.
 * See {@link https://www.w3.org/TR/activitystreams-vocabulary/#connections 5.2 Representing Relationships Between Entities}
 * for additional information.
 *
 * {@link https://www.w3.org/ns/activitystreams#Relationship Docs}
 */
export class Relationship extends ASBase<RelationshipFields>{
    constructor(fields: RelationshipFields) {
        super({
            type: ASModelType.Relationship,
            ...fields
        })
    }
}