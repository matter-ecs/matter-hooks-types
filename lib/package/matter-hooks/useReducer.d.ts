export default function useReducer<S, A>(
	reducer: (state: S, action: A) => S,
	initialState: S,
	discriminator?: unknown,
): LuaTuple<[S, (action: A) => void]>;
