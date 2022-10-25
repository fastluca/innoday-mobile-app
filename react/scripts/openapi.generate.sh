#!/bin/bash
#
if ! command -v openapi-generator &>/dev/null; then
	echo "openapi generator has not been found, please install it"
	echo "osx => brew install openapi-generator"
	exit
fi

openapi-generator generate -i https://app-service-atvciqi4lq-ey.a.run.app/v3/api-docs -o src/openapi -g typescript-fetch --additional-properties=typescriptThreePlus=true

