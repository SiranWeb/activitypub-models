import {ASBase} from "../ASBase.model";
import {IntransitiveActivityFields} from './IntransitiveActivity.types';

/**
 * Instances of IntransitiveActivity are a subtype of
 * Activity representing intransitive actions. The
 * object property is therefore inappropriate for these activities.
 *
 * {@link https://www.w3.org/ns/activitystreams#IntransitiveActivity Docs}
 */
export class IntransitiveActivity extends ASBase<IntransitiveActivityFields>{
    constructor(fields: IntransitiveActivityFields) {
        super(fields);
    }
}