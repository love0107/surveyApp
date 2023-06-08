package dbConnection

import (
	"time"

	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

func Init() {
	// Register MySQL driver
	orm.RegisterDriver("mysql", orm.DRMySQL)

	// Register database alias 'default'
	orm.RegisterDataBase("default", "mysql", "root:password@456@tcp(localhost:3306)/survey")
     // Set default database alias
	orm.SetDataBaseTZ("default", time.UTC)

	// Enable debug mode
	orm.Debug = true
}
