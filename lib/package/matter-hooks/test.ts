import { useMemo } from "./useMemo";

const test = useMemo((): "Hello!" => {
	return "Hello!";
}, []);
