export function useMemo<T>(callback: () => T, dependencies: unknown[], discriminator?: unknown): T;

export function useMemo<T extends defined[]>(
	callback: () => LuaTuple<T>,
	dependencies: unknown[],
	discriminator?: unknown,
): LuaTuple<T>;
