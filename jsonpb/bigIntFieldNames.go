package jsonpb

var (
	bigIntFieldNames = NewBigIntFieldNames()
)

func NewBigIntFieldNames() map[string]bool {
	fns := make(map[string]bool, 15)

	fns["total_received"] = true
	fns["total_sent"] = true
	fns["balance"] = true
	fns["unconfirmed_balance"] = true
	fns["final_balance"] = true
	fns["value"] = true
	fns["ref_balance"] = true
	fns["total"] = true
	fns["fees"] = true
	fns["high_gas_price"] = true
	fns["medium_gas_price"] = true
	fns["low_gas_price"] = true
	fns["gas_limit"] = true
	fns["gas_used"] = true
	fns["gas_price"] = true
	return fns
}
