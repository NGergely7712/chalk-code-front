export const urls = {
    getURL(category) {
        switch (category) {
            case "homework":
                return {name: "Homework", link: "/students/{studentId}/homework"}
        }
    }
}

export default urls