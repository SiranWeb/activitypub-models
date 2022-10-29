import {ASObject} from "../models/asObject/ASObject.model";

export enum ASModelType {
    Object = 'Object',
    Activity = 'Activity',
    Application = 'Application',
    Article = 'Article',
    Document = 'Document',
    Event = 'Event',
    Group = 'Group',
    Note = 'Note',
    Organization = 'Organization',
    Person = 'Person',
    Service = 'Service',
}

// TODO: implement
export type Image = 'placeholder';
export type Article = 'placeholder';
export type Audio = 'placeholder';
export type Document = 'placeholder';
export type Event = 'placeholder';
export type Note = 'placeholder';
export type Page = 'placeholder';
export type Place = 'placeholder';
export type Profile = 'placeholder';
export type Relationship = 'placeholder';
export type Tombstone = 'placeholder';
export type Video = 'placeholder';
export type Mention = 'placeholder';
export type Link = 'placeholder';
export type Collection = 'placeholder';
export type AnyASObject = ASObject | Article | Audio | Document | Event | Image | Note | Page | Place | Profile | Relationship | Tombstone | Video;
export type DateTime = string;
export type Duration = string;
export type UrlValue = string | Link;
export type IconValue = string | Image | Link;
export type ImageValue = string | Image | Link;
export type AttachmentValue = string | AnyASObject | Link;
export type AudienceValue = string | AnyASObject | Link;
export type InReplyToValue = string | AnyASObject | Link;
export type LocationValue = string | Place | Link;
export type PreviewValue = string | AnyASObject | Link;
export type ToValue = string | AnyASObject | Link;
export type BtoValue = string | AnyASObject | Link;
export type CcValue = string | AnyASObject | Link;
export type BccValue = string | AnyASObject | Link;
export type GeneratorValue = string | ASObject | Link;
export type ObjectValue = string | AnyASObject | Link;
export type AttributedToValue = string | AnyASObject | Link | Mention;
export type TagValue = string | AnyASObject | Link | Mention;
export type ActorValue = string | ASObject | Link;
export type TargetValue = string | ASObject | Link;
export type ResultValue = string | ASObject | Link;
export type OriginValue = string | ASObject | Link;
export type InstrumentValue = string | ASObject | Link;