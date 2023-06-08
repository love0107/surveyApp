package model

type Survey struct {
	ID     int    `json:"id" orm:"column(id)"`
	QId    int    `json:"qId" orm:"column(qId);pk"`
	Rating string `json:"rating" orm:"column(rating)"`
}
