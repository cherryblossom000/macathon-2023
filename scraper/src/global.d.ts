// ugh when will this get fixed
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924

import type {RequestInfo, Response, RequestInit} from 'undici'

declare global {
	function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
}
