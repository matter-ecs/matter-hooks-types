export type AsyncSuccess<T> = {
	success: true;
	value: T;
};

export type AsyncError<E> = {
	success: false;
	error: E;
};

export type AsyncResult<T, E> = AsyncSuccess<T> | AsyncError<E>;

export type AsyncComplete<T> = {
	completed: true;
	result: AsyncResult<T, string>;
};

export type AsyncIncomplete = {
	completed: false;
};

export type AsyncReady<T> = AsyncComplete<T> | AsyncIncomplete;

export function useAsync<T>(
	callback: () => T,
	dependencies: unknown[],
	discriminator?: unknown,
): AsyncReady<T>;
