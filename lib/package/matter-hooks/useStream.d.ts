export type StreamOptions = {
	descendants?: boolean;
	attribute?: string;
};

export type StreamInEvent = {
	adding: true;
	removing: false;
	descendant: boolean;
	instance: Instance;
};

export type StreamOutEvent = {
	adding: false;
	removing: true;
	descendant: boolean;
	instance: Instance;
};

export type StreamEvent = StreamInEvent | StreamOutEvent;

export default function useStream(
	id: unknown,
	options?: StreamOptions,
): () => LuaTuple<[number, StreamEvent]> | void;
