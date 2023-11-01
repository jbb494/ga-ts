import { Err, FlatMapFn, MapFn, Ok } from "./result";

type Task<T, R, E = Error> = (
    f: MapFn<T, R>,
    errorHandler: (e: Error) => E,
) => FlatMapFn<T, E, R, E>;

const placeholderName =
    <T, R, E = Error>(f: MapFn<T, R>, errorHandler: (e: Error) => E): FlatMapFn<T, E, R, E> =>
    (x) => {
        try {
            const result = f(x);
            return Ok(result);
        } catch (e) {
            const error = errorHandler(e);
            return Err(error);
        }
    };

placeholderName;
