export default async function handler(req, res) {
    return res.status(200).json({
        emailUserSet: !!process.env.EMAIL_USER,
        emailPassSet: !!process.env.EMAIL_PASS,
        emailUserLength: process.env.EMAIL_USER ? process.env.EMAIL_USER.length : 0,
        emailPassLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
        nodeVersion: process.version,
    });
}
