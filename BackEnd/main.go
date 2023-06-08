package main

import (
	"net/http"
	"survay/dbConnection"
	"survay/model"

	"github.com/astaxie/beego/orm"
	"github.com/beego/beego"
	"github.com/gin-gonic/gin"
)

func main() {
	dbConnection.Init()
	go func() {
		beego.Run()
	}()
	registerModels()
	r := gin.Default()
	r.POST("/submit", SubmitData)
	r.Run(":8080")
}

func SubmitData(c *gin.Context) {
	var data []model.Survey
	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	o := orm.NewOrm()
	for _, val := range data {
		_, err := o.Insert(&val)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "unable to inset data in db",
				"Error":err,
			})
			return 
		}

	}
	c.JSON(200, gin.H{
		"message": "data inserted successfully!!",
	})

}

func registerModels() {
	orm.RegisterModel(new(model.Survey))
}
