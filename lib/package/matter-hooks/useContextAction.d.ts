export type ContextActionOptions = {
	createButton?: boolean;
	inputTypes?: (Enum.KeyCode | Enum.UserInputType)[];
};

export default function useContextAction(
	actionName: string,
	callback: (
		actionName: string,
		inputState: Enum.UserInputState,
		inputObject: InputObject,
	) => Enum.ContextActionResult | undefined,
	options: ContextActionOptions,
): void;
