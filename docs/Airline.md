# FirstDataGateway.Airline

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passengerName** | **String** |  | [optional] 
**ticketNumber** | **String** |  | [optional] 
**issuingCarrier** | **String** |  | [optional] 
**carrierName** | **String** |  | [optional] 
**travelAgencyIataCode** | **String** |  | [optional] 
**travelAgencyName** | **String** |  | [optional] 
**airlinePlanNumber** | **String** |  | [optional] 
**airlineInvoiceNumber** | **String** |  | [optional] 
**reservationSystem** | **String** |  | [optional] 
**restricted** | **Boolean** |  | [optional] 
**travelRoute** | [**[AirlineTravelRoute]**](AirlineTravelRoute.md) |  | [optional] 
**relatedTicketNumber** | **String** |  | [optional] 
**ancillaryServiceCategory** | [**[AirlineAncillaryServiceCategory]**](AirlineAncillaryServiceCategory.md) | Identify the purchase of ancillary goods or services with a false value. If this element is not provided, the transaction is assumed to be a purchase of an airline ticket. | [optional] 
**ticketPurchase** | **Boolean** |  | [optional] 


<a name="ReservationSystemEnum"></a>
## Enum: ReservationSystemEnum


* `START` (value: `"START"`)

* `TWA` (value: `"TWA"`)

* `DELTA` (value: `"DELTA"`)

* `SABRE` (value: `"SABRE"`)

* `COVIA_APOLLO` (value: `"COVIA_APOLLO"`)

* `DR_BLANK` (value: `"DR_BLANK"`)

* `DER` (value: `"DER"`)

* `TUI` (value: `"TUI"`)




