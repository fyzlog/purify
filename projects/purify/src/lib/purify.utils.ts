import dompurify from "dompurify";
import { PurifyParams } from '../types/purify-params';

const createDOMPurify = dompurify;

export const purify = (payload: string, params: PurifyParams = {}): string => {
    const { context = window } = params;

    const DOMPurify = createDOMPurify(context);

    return DOMPurify.sanitize(payload);
}
