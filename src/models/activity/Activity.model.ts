import {APBase} from "../apBase/APBase.model";
import { ActivityFields } from "./Activity.types";
import {ASModelType} from "../../common/types";

/**
 * An Activity is a subtype of Object that describes some form of action that may happen,
 * is currently happening, or has already happened. The Activity type itself serves as an
 * abstract base type for all types of activities. It is important to note that the Activity
 * type itself does not carry any specific semantics about the kind of action being taken.
 *
 * {@link https://www.w3.org/ns/activitystreams#Activity Docs}
 */
export class Activity extends APBase<ActivityFields>{
    static create(fields: ActivityFields) {
        return APBase._create<ActivityFields>({
            type: ASModelType.Activity,
            ...fields,
        });
    }
}